// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import { NextApiRequest, NextApiResponse } from "next";
import { services } from "constants/data";

const ServiceAPI = (req: NextApiRequest, res: NextApiResponse) => {
  //  ここにbackendからデータを取得するロジックを書く
  console.log("API", services);

  res.status(200).json({ services });
};

export default ServiceAPI;
