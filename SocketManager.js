const io = require("./server");
const axios = require("axios");


module.exports = function(socket) {
    console.log("Socket ID: "+socket.id);

    socket.on("userConnected", () => {
        let questions = [];
        axios.get("https://gameday-testing.herokuapp.com/api/getquestions").then((qstns) => {
            // questions = qstns.data;
            questions = "these are questions";
            
            io.emit("gotquestions", questions);
        }).catch(err => console.log(err));
    })
};
