import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import passport from "../../lib/passport-miners-auth";
import storage from "../../lib/session";


export default nextConnect()
  .use(storage)
  .use(passport.initialize())
  .use(passport.session())
  .get(
    (req: NextApiRequest & { user: any }, res: NextApiResponse) => {
      if (res.session != null){
        res.session.destroy();
      }
      res.redirect("/");
    }
  );