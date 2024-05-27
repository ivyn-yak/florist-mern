import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = mongoose.Schema(
  {
    email: {
        type: String,
        required: true,
        unique: true
      },
    password: {
        type: String,
        required: true
      },
  },
  
);

///// Static Signup Method //////
userSchema.statics.signup = async function (email, password) {
  // validation //
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }


  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user
}



export const User = mongoose.model("User", userSchema);