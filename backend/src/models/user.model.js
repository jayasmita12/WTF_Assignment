
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validate= require("validator")
const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email : {
        type : String, 
        required : true, 
        unique:true,
        validate(value){
            if(!validate.isEmail(value)){
                throw new error("Put Valid Email")
            }
        }
    },
    mobile : {
        type : String, 
        required : true, 
        unique:true,
        validate(value){
            if(!validate.isMobilePhone(value)){
                    throw new error("Mobile Number must be 10 digits !")
            }
        }
        
    },
    password : {
        type : String, 
        required : true,
        unique:true,
        validate(value){
            if(!validate.isStrongPassword(value)){
                console.log("Password Must be Strong")
            }
        }
    }

    },{
    timestamps : true,
    versionKey : false,
})

userSchema.pre("save", function(next){
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("user", userSchema)

module.exports = User;


