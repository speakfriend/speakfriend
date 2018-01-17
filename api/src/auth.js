const passport = require("koa-passport");
const LocalStrategy = require('passport-local').Strategy;
const knex = require("./db/connection");
const db = require("./db");

// inspiration (ie, copy-pasta) http://mherman.org/blog/2018/01/02/user-authentication-with-passport-and-koa/
// will make bespoke when needed

// some serialization stuff for sessions?
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // this could probably be try/catch but I stole it from a tut and I'm lazy
  return db.users.getById(id)
    .then(user => {done(null, user);})
    .catch(err => {done(err, null);});
});

// Set up standard password based auth
passport.use(new LocalStrategy(options, (username, password, done) => {
  db.users.getByUsername(username)
  .then((user) => {
    if (!user) return done(null, false);
    if (password === user.password) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
  .catch((err) => { return done(err); });
}));
