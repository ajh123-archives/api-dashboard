import OAuth2Strategy from "passport-oauth2";
import passport from "passport";

// logic to save your user or check if user exists in your record to proceed.
const saveUser = (user: any) => {
  return new Promise((resolve, reject) => {
    resolve("Successful");
  });
};

passport.use(new OAuth2Strategy({
  authorizationURL: 'https://minersonline.tk/api/auth/authorize.php?state=xyz',
  tokenURL: 'https://minersonline.tk/api/auth/token.php',
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3001/api/oauth2/redirect/miners"
},
function(accessToken: any, refreshToken: any, profile: any, cb: (arg0: null, arg1: any) => any) {
  try {
    saveUser(profile);
    return cb(null, profile);
  } catch (e: any) {
    throw new Error(e);
  }
}
));


OAuth2Strategy.prototype.userProfile = function(accessToken, done) {
  const axios = require('axios');

  axios.post(
    'https://minersonline.tk/api/auth/v1/getCurrent.php',
    new URLSearchParams({
        'access_token': accessToken
    }),
    { withCredentials: true }
  ).then(function (response: any) {
    axios.post(
      'https://minersonline.tk/api/auth/v1/getUser.php',
      new URLSearchParams({
          'access_token': accessToken,
          'id': response.data.id
      }),
      { withCredentials: true }
    ).then(function (response2: any){
      return done(null, response2.data);
    }).catch(function (error: any){
      console.error(error);
      return done(new Error("Unable to retrive user data"), {})
    });
  }).catch(function (error: any){
    console.error(error);
    return done(new Error("Unable to retrive current user id"), {})
  })
};



// passport.serializeUser stores user object passed in the cb method above in req.session.passport
passport.serializeUser((user, cb) => {
  process.nextTick(function () {
    return cb(null, user);
  });
});

// passport.deserializeUser stores the user object in req.user
passport.deserializeUser(function (
  user: any,
  cb: (arg0: null, arg1: any) => any
) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

// for broader explanation of serializeUser and deserializeUser visit https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize

// An article that explains the concept of process.nextTick https://nodejs.dev/learn/understanding-process-nexttick

export default passport;