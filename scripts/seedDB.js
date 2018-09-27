const mongoose = require("mongoose");
const db = require("../src/model");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/userList"
);

  const userSeed = [
    {
        passwordHash: 'password',
        email: 'svigil@gmail.com',
        username: 'svigil',
        tokenSeed: '1',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'word',
        email: 'dan@gmail.com',
        username: 'dan',
        tokenSeed: '2',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'mike',
        email: 'mike@gmail.com',
        username: 'mike',
        tokenSeed: '3',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'jared',
        email: 'jared@gmail.com',
        username: 'jared',
        tokenSeed: '4',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'suzanne',
        email: 'suzanne@gmail.com',
        username: 'suzanne',
        tokenSeed: '5',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'mandie',
        email: 'mandie@gmail.com',
        username: 'mandie',
        tokenSeed: '6',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'michael',
        email: 'michael@gmail.com',
        username: 'michael',
        tokenSeed: '7',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'mary',
        email: 'marry@gmail.com',
        username: 'mary',
        tokenSeed: '8',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'david',
        email: 'david@gmail.com',
        username: 'david',
        tokenSeed: '9',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'suzy',
        email: 'suzy@gmail.com',
        username: 'suzy',
        tokenSeed: '10',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'groucho',
        email: 'groucho@gmail.com',
        username: 'groucho',
        tokenSeed: '11',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'tron',
        email: 'tron@gmail.com',
        username: 'tron',
        tokenSeed: '12',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'kitty',
        email: 'kitty@gmail.com',
        username: 'kitty',
        tokenSeed: '13',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'allergyAl',
        email: 'allergyAl@gmail.com',
        username: 'allergyAl',
        tokenSeed: '14',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'herb',
        email: 'herb@gmail.com',
        username: 'herb',
        tokenSeed: '15',
        created: new Date(Date.now())
    },
    {
        passwordHash: 'beatrix',
        email: 'beatrix@gmail.com',
        username: 'beatrix',
        tokenSeed: '16',
        created: new Date(Date.now())
    }
  ];
  

  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });