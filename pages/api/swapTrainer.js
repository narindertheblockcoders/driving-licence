import axios from "axios";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const { token, data } = req.body;
      console.log("Data------>>", token, data);
      var config = {
        method: "post",
        url: "http://134.122.64.108:3005/api/v1/member/swaptrainer",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: data,
      };
      await axios(config).then(function (response) {
        console.log("response", response.data);
        res.status(200).json({ data: response.data });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
