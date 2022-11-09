const handler = async(req,res)=>{
    try{
        const responce = await fetch("http://localhost:3005/payment?amount=967")
        const name = await responce.json()
        res.status(200).json(name)
        console.log(name.body.data.id)
    }
    catch{
        res.status(400).json("Bad Request")
    }
}



export default handler