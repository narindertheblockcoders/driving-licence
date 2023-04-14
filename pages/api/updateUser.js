import axios from "axios";

export default  async function handler(req,res) {
    if(req.method == "POST") {
        try{
            const {data,token} = req.body;
            var config= {
                method:"post",
                url:"http://52.9.60.249:6000/api/v1/member/updateProfile",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data
                
            };
            await axios(config).then (function (response) {
                res.status(200).json({data:response.data})
            });

        }catch(err) {
            console.log(err);
            res.status(500).json ({Error:err})
        }
    }
}