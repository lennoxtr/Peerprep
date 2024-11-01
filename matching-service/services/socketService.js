const matchController = require('../controllers/matchController');

exports.handleSocketConnection = (socket) => {
    socket.on("start match", (selectedDifficulty, selectedCategory) => {
        matchController.matchUser(socket, selectedDifficulty, selectedCategory,);
    });

    socket.on("cancel match by button", () => {
        matchController.cancelMatchByButton(socket);
    });

    socket.on("cancel match by timeout", () => {
        matchController.cancelMatchByTimeout(socket);
    });
};
