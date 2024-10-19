import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

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