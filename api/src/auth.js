const passport = require("koa-passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const db = require("./db");
const users = require("./users");

// inspiration (ie, copy-pasta) http://mherman.org/blog/2018/01/02/user-authentication-with-passport-and-koa/
// will make bespoke when needed

// some serialization stuff for sessions?
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // this could probably be try/catch but I stole it from a tut and I'm lazy
  return users.db
    .getById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err, null);
    });
});

// Set up standard password based auth
passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    users.db
      .getByEmail(email)
      .then(user => {
        if (!user) return done(null, false);
        if (!comparePass(password, user.password)) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

function comparePass(userPass, dbPass) {
  return bcrypt.compareSync(userPass, dbPass);
}
