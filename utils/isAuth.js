require('dotenv').config();

const password = process.env.PASSWORD;

function isAuth(req, res, next) {
    const auth = req.headers.authorization;
    if (auth === password) {
      next();
    } else {
      res.status(401);
      res.send('Access forbidden');
    }
}

module.exports = isAuth;