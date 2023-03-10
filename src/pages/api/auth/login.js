/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = process.env.SECRET;

export default async function (req, res) {
  const { username, password } = req.body;

  if (username === "heaven" && password === "sendutsek123") {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 dino
        username: username,
      },
      secret
    );
  
    const saksakke = serialize("OursiteJWT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
  
    res.setHeader("Set-Cookie", saksakke);
  
    res.status(200).json({ message: "Success njing!" });

   
  } else {
    res.json({ message: "salah blok goblok!" });
  }
  
}
