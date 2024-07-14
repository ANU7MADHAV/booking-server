import { Response } from "express";

const ping = (res: Response) => {
  return res.send("pingged");
};

export default ping;
