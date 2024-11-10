import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import { compare } from "bcrypt";

const age=3*24*60*60*1000

const createToken=(email, userId)=>{
    return jwt.sign({email,userId}, process.env.jwt_key, {expiresIn:age})
}

export const signup= async (request, response,next)=>{
    const {email, password}=request.body

    try {

    if(!email || !password){
        return response.status(400).json("email and password is requied")
    }
    const user= await User.create({email, password})

    response.cookie("jwt",createToken(email,user.id), {
        age,
        scure:true,
        sameSite:"None"
    })
    return response.status(200).json({
        user:{
            id:user.id,
            email:user.email,
            // firstname:user.firstname,
            // lastname:user.lastname,
            // image:user.image,
            profileSetup:user.profileSetop
        }
    })
        
    } catch (err) {
        return  response.status(500).json("internal sever error");
    }
}

export const login= async (request, response,next)=>{
    const {email, password}=request.body

    try {

    if(!email || !password){
        return response.status(400).json("email and passwor is requied")
    }
    const user= await User.findOne({email})

    if(!user){
        return response.status(400).json("user with the given email id in not present")
    }

    const auth= compare(password, user.password)
    if(!auth){
        return response.status(400).json("password is incorrect")
    }
    response.cookie("jwt",createToken(email,user.id), {
        age,
        scure:false,
        sameSite:"None"
    })
    return response.status(200).json({
        user:{
            id:user.id,
            email:user.email,
            firstname:user.firstname,
            lastname:user.lastname,
            image:user.image,
            profileSetup:user.profileSetop,
            color:user.color
        }
    })
        
    } catch (err) {
        return  response.status(500).json("internal sever error");
    }
}

export const getUserInfo= async (request, response,next)=>{

    try {

        console.log(request.userId);
        const userData= await User.findOne(request.userId)
        if(!userData){
            return response.status(400).json("user with the given id in not found")
        }
    return response.status(200).json({
            id:userData.id,
            email:userData.email,
            firstname:userData.firstname,
            lastname:userData.lastname,
            image:userData.image,
            profileSetup:userData.profileSetop,
            color:userData.color
    })
        
    } catch (err) {
        return  response.status(500).json("internal sever error");
    }
}