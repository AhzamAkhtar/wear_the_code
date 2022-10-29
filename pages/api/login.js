import connectDb from "../../middleware/mongoose";
import User from "../../modals/User";
const handler = async (req,res) => {
    if(req.method == "POST"){
        console.log(req.body)
        let user = await User.findOne({"email": req.body.email})

        if (user) {
            if(req.body.email==user.email && req.body.password == user.password){
                res.status(200).json({success : true , email:user.email,name:user.name})
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

        res.status(200).json({success : "success"})
    }
    else{
        res.status(400).json({error : "Method Not Allowed"})
    }
}

export default connectDb(handler) 