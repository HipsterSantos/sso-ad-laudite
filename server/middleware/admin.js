
module.exports = function (req, res, next) { 
  // 401 status code -  Unauthorized
  // 403 status code - Forbidden 
  
  if (!req.user.isAdmin) return res.status(403).send('Access denied.');

  next();
}