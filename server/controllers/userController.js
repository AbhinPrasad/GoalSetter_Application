import asyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from "../models/userModel.js";

export const registerUser = asyncHandler(async (req, res) => {
    res.json({message:'reg user'})
});

export const loginUser = asyncHandler(async(req,res)=>{
    res.json({message:'login'})
})

export const getUserData = asyncHandler(async(req,res)=>{
    res.json({message:'getuser'})
})