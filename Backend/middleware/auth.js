const jwt = require('jsonwebtoken');

module.exports = function(requiredRole = null) {
  return function(req, res, next) {
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ msg: 'No token, authorization denied.' });
    }
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      if (requiredRole && decoded.role !== requiredRole) {
        return res.status(403).json({ msg: 'Access denied: insufficient permissions.' });
      }
      next();
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid.' });
    }
  };
}; 