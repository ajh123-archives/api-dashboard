import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import passport from "../../../../lib/passport-miners-auth";
import storage from "../../../../lib/session";


export default nextConnect()
.use(storage)
.get(
  passport.authenticate("oauth2"),
  (req: MyNextApi & { user: any }, res: NextApiResponse) => {
    req.session.isLoggedIn = true;
    req.session.save(function (err: any){
      res.redirect(process.env.APP_BASE_URI+"/user/Dashboard");
    });
  }
);