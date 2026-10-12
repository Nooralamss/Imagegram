import mongoose, { Types } from "mongoose";
import bcrypt from 'bcrypt';
const userSchema=new mongoose.Schema({
     username:{

        type:String,
        required:true,
        unique: true,
        minLength: 5
     
     },
     email:{
        type:String,
        required:true,
        unique:true,
        minLength:5,
        validate: {
      validator: function (emailValue) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
      },
      message: "Please enter a valid email address",
    },

     },
     password:{
        type:String,
        required:true,
        minLength:8,
     }
},{timestamps:true});
userSchema.pre('save',function modifyPassword(next){
   //incoming user object
   const user=this;
   const SALT=bcrypt.genSaltSync(9);

   //hash password
   const hashedPassword=bcrypt.hashSync(user.password,SALT);

   //replace plain password with hashed password
   user.password=hashedPassword;
   next();
});
const user=mongoose.model("user",userSchema);
export default user;
