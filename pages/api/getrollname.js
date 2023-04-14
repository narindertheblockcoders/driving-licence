import axios from "axios";

export default async function handler(req,res)
{
    if(req.method == "POST")
    {
        try {
            const {token} = req.body
            var config = {
                method:"post",
                url:"http://52.9.60.249:6000/api/v1/member/getRole",
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