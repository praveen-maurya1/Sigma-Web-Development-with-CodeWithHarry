use("CrudDB")

db.createCollection("courses")

// db.courses.insertOne({
//     name: "Harry's free courses",
//     price: 0,
//     assignment: 12,
//     projects: 560
// })

// db.courses.insertMany(
//     [
//         {
//             name: "Harry's free courses",
//             price: NumberInt(0),
//             assignment: NumberInt(12),
//             projects: NumberInt(560)
//         },
//         {
//             name: "Java Mastery",
//             price: 0,
//             assignment: NumberInt(20),
//             projects: NumberInt(15)
//         },
//         {
//             name: "Python Bootcamp",
//             price: NumberInt(12000),
//             assignment: NumberInt(18),
//             projects: NumberInt(12)
//         },
//         {
//             name: "Web Dev Pro",
//             price: 0,
//             assignment: NumberInt(25),
//             projects: NumberInt(20)
//         },
//         {
//             name: "C Programming Basics",
//             price: NumberInt(8000),
//             assignment: NumberInt(10),
//             projects: NumberInt(8)
//         },
//         {
//             name: "C++ Advanced",
//             price:0,
//             assignment: NumberInt(14),
//             projects: NumberInt(10)
//         },
//         {
//             name: "JavaScript Complete",
//             price: 0,
//             assignment: NumberInt(22),
//             projects: NumberInt(18)
//         },
//         {
//             name: "Data Structures",
//             price: NumberInt(16000),
//             assignment: NumberInt(30),
//             projects: NumberInt(25)
//         },
//         {
//             name: "Machine Learning Intro",
//             price: NumberInt(20000),
//             assignment: NumberInt(28),
//             projects: NumberInt(22)
//         },
//         {
//             name: "Full Stack Developer",
//             price: 0,
//             assignment: NumberInt(35),
//             projects: NumberInt(30)
//         }
//     ]
// )

// let a = db.courses.find({ price: 0 })

// console.log(a.count())
// console.log(a.toArray())


// let b = db.courses.findOne({ price: 0 })
// console.log(b)



// db.courses.updateOne({ price: 0 }, { $set: { price: 200 } })
// db.courses.updateMany({ price: 0 }, { $set: { price: 50 } })




// db.courses.deleteOne({ price: 200 })

// db.courses.deleteMany({ price: 50 })


//Querry and projection operator
db.courses.deleteMany({ price: { $ne: 8000 } })