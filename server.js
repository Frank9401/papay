const dotenv = require("dotenv");
dotenv.config();


const http = require("http")
const mongodb = require("mongodb");

let db;
const connectionString =  process.env.MONGO_URL;
   //"mongodb+srv://frankshi94:eVR5ycVM0t7aJ2l2@cluster0.l7w5lhq.mongodb.net/?retryWrites=true&w=majority"

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTropology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log ("MongoDb connection succeed");
        module.exports = client;
        const app = require("./app");
      
        const server = http.createServer(app);
        let PORT = process.env.PORT || 3014;
        server.listen(PORT , function(){
    console.log(
        `The server is running succesfully on port : ${PORT}, http://localhost:${PORT}`
        );
    });
}
} );
   