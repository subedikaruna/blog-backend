const authorized = (roles) => {
  return async (req, res, next) => {
    try {
      let id = req._id;
      let result = await User.findById(_id);
      let tokenRole = result.token;
      console.log(tokenRole);
      if (roles.includes(tokenRole)) {
        next();
      } else {
        res.status(403).json({
          success: false,
          message: "authorization failed",
        });
      }
    } catch (error) {
      res.status(403).json({
        success: false,
        message: "authorization failed",
      });
    }
  };
};
export default authorized;
