// npm install crypto-js
// npm install jsonwebtoken
import connectDb from "../../middleware/mongoose";
import User from "../../modals/User";
var CryptoJs = require('crypto-js')
var jwt = require('jsonwebtoken')
const handler = async (req,res) => {
    if(req.method == "POST"){
        console.log(req.body)
        let user = await User.findOne({"email": req.body.email})
        const bytes = CryptoJs.AES.decrypt(user.password,"secret123")
        let decrypted = bytes.toString(CryptoJs.enc.Utf8)
        

        if (user) {
            if(req.body.email==user.email && req.body.password == decrypted){
                // purana
                //res.status(200).json({success : true , email:user.email,name:user.name})
                var token = jwt.sign({email:user.email , name:user.name},"jwtsecret",{
                    expiresIn:"2d"
                })
                res.status(200).json({success:true,token})
            }
            else{
                res.status(200).json({success:false, error : "Invalid Credentials"})
            }
        }
        else{
            res.status(200).json({
                success : false , error : "No User Found"
            })
        }

        
    }
    else{
        res.status(400).json({error : "Method Not Allowed"})
    }
}

export default connectDb(handler) 