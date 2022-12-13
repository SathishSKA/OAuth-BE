const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "468739055762-7k78jif1b627066ssgcll09mgfk0ief2.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "6fc6b19f9d2c04d25ecb";
GITHUB_CLIENT_SECRET = "212fef0de4eb3dbab3b92ff4c6e96340d786b68e";

FACEBOOK_APP_ID = "3307993242752028";
FACEBOOK_APP_SECRET = "e7db9619cee319929976db20122a8249";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
