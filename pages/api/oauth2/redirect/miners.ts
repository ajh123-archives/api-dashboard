import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import passport from "../../../../lib/passport-miners-auth";
import storage from "../../../../lib/session";


export default nextConnect()
.use(storage)
.get(
  passport.authenticate("oauth2"),
  (req: NextApiRequest & { user: any }, res: NextApiResponse) => {
    req.session.isLoggedin = true;
    req.session.save(function (err: any){
      res.redirect("/user/Dashboard");
    });
  }
);