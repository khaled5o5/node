const auth = function (req, res, next) {
    const user = req.params.user;
    if (user.toLowerCase() == 'khaled') {
        next()
        return
    }
    res.send({ msg: "you are not authorized"})
}
export default auth 