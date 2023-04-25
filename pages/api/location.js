import axios from "axios";

export default async function handler(req,res)
{
    if(req.method == "POST")
    {
        try {
            const {token} = req.body
            var config = {
                method:"post",
                url:"http://192.168.1.136:6000/api/v1/member/receivelocation",
                headers:{
                    Authorization: `Bearer ${token}`
                },

            }
            const response=await axios(config)
            
            res.status(200).json({data:response.data})
        } catch (error) {
            console.log("ERROR---->",error);
        }
    }
}