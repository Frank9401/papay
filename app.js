// module.exports = app;
console.log("Web Server boshlash");
const express = require("express");
const app = express();
const router = require("./router.js");
const router_bssr = require("./router_bssr.js");


//Mongo DB chaqirish
// const db = require("./server").db();
// const mongodb = require("mongodb");

let session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection:"sessions",
});



// 1 express ga kirib kelyatgan malumotlarga bogliq bolgan kodlar yoziladi. KIRISH kodlari
app.use(express.static("public"));
app.use(express.json());// kirib kelyatgan json formatdagi data ni objectga ogiradi
app.use(express.urlencoded({extended:true})); //html forumdan request qiladi 


//2: Session code
// app.use(
//     session({
//         secret: process.env.SESSION_SECRET,
//         cookies: {
//             maxAge: 1000 * 60 * 30,  // for 30 minutes
//         },
//         store: store,
//         resave: true,
//         saveUnitialized: true,
//     })
// );



//3  VIEWS ga bogliq kodlar
app.set("views", "views");
app.set("view engine","ejs");
 
// 4 Routing code

app.use("/resto", router_bssr);      //annaviy usul
app.use("/", router);              // React



module.exports = app;