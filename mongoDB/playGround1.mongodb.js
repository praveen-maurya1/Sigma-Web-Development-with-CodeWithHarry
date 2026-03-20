
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('Courses').insertMany([

    { "course": "java", "price": 15000 },
    { "course": "python", "price": 12000 },
    { "course": "javascript", "price": 14000 },
    { "course": "c", "price": 8000 },
    { "course": "c++", "price": 9000 },
    { "course": "go", "price": 13000 },
    { "course": "rust", "price": 16000 },
    { "course": "php", "price": 10000 },
    { "course": "typescript", "price": 14500 },
    { "course": "kotlin", "price": 15500 }

]);


console.log(`Done insering data`);

