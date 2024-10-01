import jwt from "jsonwebtoken";
import { secretkey } from "./config.js";
//email

let info={
    id:"123114",
    role:"admin"
}
let expiryInfo={
    expiresIn:"365d"
}
export let token = await jwt.sign(info,secretkey,expiryInfo);


//verify token
export let verifiedToken=jwt.verify(token,secretkey)
