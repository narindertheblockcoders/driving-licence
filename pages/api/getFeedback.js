import axios from "axios";

export default async function handler(req,res) {
    if(req.method == "POST") {

      try{
            const {id} = req.body;
            const {token} = req.body;

            // console.log(id ,"freeddd")

            var config = {
                method:"post",
                url:"http://192.168.1.136:6000/api/v1/member/feedback",
                headers:{
                    Authorization: `Bearer ${token}`
                },data:{id:id}
            };
            await axios(config).then(function (response) {
                console.log("response",response.data);
                res.status(200).json({data:response.data});
            })
            
        }catch(err) {
            console.log(err);
            res.status(500).json({Error:err});
        }

    }
}