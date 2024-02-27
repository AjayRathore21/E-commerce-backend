const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGUxNDFiNTk5OWM5NTc2N2YwMDNmNCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA5MDUyOTU1fQ.eLFmzUXyNQokCGgEzUccHSecjcl3cuSgA6Q0-e1_SPE"
  return token;
};