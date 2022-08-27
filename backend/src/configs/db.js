const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://jaya-test:sahu1234@cluster0.i7ryplj.mongodb.net/?retryWrites=true&w=majority");
};


//mongodb+srv://nihal1234:nihal1234@nihalcluster.p9poj.mongodb.net/web15?retryWrites=true&w=majority