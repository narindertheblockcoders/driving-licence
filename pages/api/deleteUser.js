import axios from "axios";

export default async function handler(req,res) {
    if(req.method == "POST") {

      try{
            const id = req.body;
            const {token} = req.body;
            
            var config = {
                method:"post",
                url:"http://52.9.60.249:6000/api/v1/member/deleteUser",
                headers:{
                    Authorization: `Bearer ${token}`
                },data:id
            };
            await axios(config).then(function (response) {
                res.status(200).json({data:response.data});
            })
            
        }catch(err) {
            console.log(err);
            res.status(500).json({Error:err});
        }

    }
}