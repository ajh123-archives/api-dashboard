import passport from "../../lib/passport-miners-auth";
import nextConnect from "next-connect";
import storage from "../../lib/session";


export default nextConnect()
  .use(storage)
  .use(passport.initialize())
  .use(passport.session())
  .get(
    passport.authenticate("oauth2", {})
    //   scope: ["profile", "email"],
    // })
  );