// var MongoClient=require("mongodb").MongoClient;
const {MongoClient,ObjectId}=require("mongodb");
var count=0;

// MongoClient.connect("mongodb://localhost:27017/project",(err,db)=>{
//   if(err){
//     return console.log("Unnbale to connect to server")
//   }
//   db.collection("users").insertOne({name:"saminowz"},(err,res)=>{
//     if(err){
//       return console.log("Unnable to Inser data")
//     }
//     console.log(res.ops);
//   })
//   db.collection("users").find().forEach((res)=>{
//     console.log(res)
//     count=count+1;
//     console.log(count);
//   })
//
//   db.close();
// })
MongoClient.connect("mongodb://localhost:27017/project",(err,db)=>{
  if(err){
    return console.log("Unnable to conect to server")
  }
  db.collection("users").find({name:"saminowz"}).toArray().then((res)=>{
    console.log(res)
  })
})
console.log(count);
