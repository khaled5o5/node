import exprees from 'express'
import auth from "./services/Auth.js";
const app = exprees();
const msgs = [];



app.use("/greet/:user", auth);

app.post("/greet/:user/:msg?", function (req, res) {
    const msg = req.params.msg;
    msgs.push(msg);
    res.send({ msg: "your msg is in the room" });
});

app.get("/greet/:user/", function (req, res) {
    res.send(msgs);
});

app.delete("/greet/:user/:index", function (req, res) {
    const index = req.params.index;
    const msg = msgs.splice(index, 1);
    res.send({ msg: msg + "went to trash" });
});

app.put("/greet/:user/:index/:newMsg", function (req, res) {
    const newMsg = req.params.newMsg
    const index = req.params.index
    msgs[index] = newMsg
    res.send({ msg: "now its a new msg" })
});


const PORT = 1234
app.listen(PORT, function () {
    console.log("Up and running in port " + PORT);
})
