import axios from "axios";

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const id = req.body;
      const { token } = req.body;

      console.log(id, token, "Delete client data for api");
      var config = {
        method: "post",
        url: "http://134.122.64.108:3005/api/v1/member/deleteclient",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: id,
      };
      await axios(config).then(function (response) {
        res.status(200).json({ data: response.data });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
