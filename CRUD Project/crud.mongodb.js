use("Cruddb")

// 
//------------------------------------------------------- CREATE---------------------------------------------------------------

db.createCollection("courses")

// db.courses.insertOne({
//     name:"Vivek loving techniques",
//     price: 0,
//     task:69,
//     practical:1
// })

// db.courses.insertMany([
//     {
//         "name": "Advanced Machine Learning",
//         "price": 15000,
//         "task": 85,
//         "practical": 2
//       },
//       {
//         "name": "Web Development Basics",
//         "price": 8000,
//         "task": 45,
//         "practical": 3
//       },
//       {
//         "name": "Data Visualization with Python",
//         "price": 11000,
//         "task": 60,
//         "practical": 4
//       },
//       {
//         "name": "iOS App Development",
//         "price": 13000,
//         "task": 75,
//         "practical": 5
//       },
//       {
//         "name": "Game Development with Unity",
//         "price": 12000,
//         "task": 70,
//         "practical": 6
//       },
//       {
//         "name": "Ethical Hacking Fundamentals",
//         "price": 14000,
//         "task": 80,
//         "practical": 7
//       },
//       {
//         "name": "Digital Marketing Essentials",
//         "price": 9000,
//         "task": 50,
//         "practical": 8
//       },
//       {
//         "name": "Blockchain Basics",
//         "price": 10000,
//         "task": 55,
//         "practical": 9
//       },
//       {
//         "name": "Mobile Application Design",
//         "price": 11000,
//         "task": 65,
//         "practical": 10 
//       }
// ])

//------------------------------------------------------------- READ-------------------------------------------------------------

// let a = db.courses.find({price:11000})
// console.log(a.toArray());

// let b = db.courses.findOne({price:11000})
// console.log(b);

//-------------------------------------------------------------UPDATE-------------------------------------------------------------

// db.courses.updateOne({price:0}, {$set:{price:15000}})

// db.courses.updateMany({price:15000},{$set:{price:52000}})

//------------------------------------------------------------ DELETE--------------------------------------------------------------

// db.courses.deleteOne({practical:15})

// db.courses.deleteMany({practical:15})

// Read About The MongoDB Operators , Conditionals And Aggregators

// https://www.mongodb.com/docs/manual/reference/operator