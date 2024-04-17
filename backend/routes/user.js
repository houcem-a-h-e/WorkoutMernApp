const {signupUser,loginUser} =require ('../controllers/userController');
const express=require('express');

const router=express.Router();

// login route
router.post('/login',loginUser)


//singup route
router.post('/signup',signupUser)



module.exports= router;