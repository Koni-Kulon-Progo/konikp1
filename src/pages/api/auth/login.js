import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(
  async function loginRoute(req, res) {
    const { username, password } = req.body
    if (username === 'konikp' && password === 'adminkoni') {
        req.session.user = {
          login: true,
        }

        await req.session.save();
        res.send({ message: 'Success login!' });
    } else {
        res.status(400).send({ message: 'Cannot login! Wrong password and username!' })
    }
  },
  {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
);