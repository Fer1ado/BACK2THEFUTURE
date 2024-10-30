export const checkAdmin = async (req, res, next) => {
    try {
      const user = req.user
    //   console.log(user)
      if(user.role !== 'admin') {
        req.session.messages = "You dont have admin credentials to enter this section"
        res.status(400).redirect("/loginError")}
      else next();
    } catch (error) {
      next(error)
    }
  };

  export const checkUser = async (req, res, next) => {
    try {
      const user = req.user
      if(user.role !== "user") {
        req.session.messages = "you must have user credentials to enter this section"
        res.status(401).redirect("/loginerror")
      } else next();
    } catch (error) {
      next(error)
    }
  };

