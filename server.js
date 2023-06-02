const dotenv = require("dotenv");
dotenv.config();


const http = require("http")
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

// let db;
const connectionString =  process.env.MONGO_URL;
//    //"mongodb+srv://frankshi94:eVR5ycVM0t7aJ2l2@cluster0.l7w5lhq.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
(err, goose) => {
    if(err) console.log(err,"ERROR on connection MongoDB");
    else {
        console.log ("Mongodb connection succeed");
        // console.log(goose);
        // module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = process.env.PORT || 3014;
        server.listen(PORT , function(){
    console.log(
        `The server is running succesfully on port : ${PORT}, http://localhost:${PORT}`
        );
    });
};
} );
   