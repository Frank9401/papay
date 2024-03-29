console.log("Web Server boshlash");  //
const http = require("http");
const express = require("express");
const app = express();  //instint bu app 
const router = require("./router.js");
const router_bssr = require("./router_bssr.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//Mongo DB chaqirish
// const db = require("./server").db();
// const mongodb = require("mongodb");

let session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: "sessions",
});

// 1. KIRISH code##
// 1 express ga kirib kelyatgan malumotlarga bogliq bolgan kodlar yoziladi. KIRISH kodlari
app.use(express.static("public"));   // public ichidagi folderlarni ochib beryapti
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json()); // kirib kelyatgan json formatdagi data ni objectga ogiradi
app.use(express.urlencoded({ extended: true })); //html forumdan request qiladi
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(cookieParser());

//2: Session code
// SID
app.use(session({
  secret: process.env.SESSION_SECRET, 
  cookie:{
    maxAge: 1000 * 60 * 30 // for 30mins
      },
  store : store,
  resave: true, 
  saveUninitialized: true,
  
})); 
app.use(function (req, res, next) {
  res.locals.member = req.session.member;   
  // restarantga tegishli bulgan member datalarni res.locals.member deb save qilyapmiz
  // res.locals deb undan keyin . quyib maxsus variable joylasak 
  // browserda member qabul qilamiz va har bir keladigan resga memberni beradi va biz uni homepagedan uqib olasmiz

  next();
});

//3  VIEWS ga bogliq kodlar
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

app.use("/resto", router_bssr); //annaviy usul
app.use("/", router); // React

const server = http.createServer(app);

/***SOCKET.IO BACKEND SERVER */
const io = require("socket.io")(server, {
  serveClient: false,
  origins: "*:*",
  transport: ["websocket", "xhr-polling"],
});

let online_users = 0;
io.on("connection", function (socket) {
  online_users++;
  console.log("New user, total:", online_users);

  socket.emit("greetMsg", { text: "welcome" }); //ulangan odam un yoziladigan habar, faqat ulangan odamga habar boradi
  io.emit("infoMsg", { total: online_users }); //bu hammaga egani

  socket.on("disconnect", function () {
    online_users--;
    socket.broadcast.emit("infoMsg", { total: online_users });
    console.log("client disconnected total:", online_users);
  });

  socket.on("createMsg", function (data) {
    console.log(data);
    io.emit("newMsg", data);
  });

  // socket.broadcast.emit(); // ulagan odamdan tashqari qolganlarga malumot yuborish
});
module.exports = server;
