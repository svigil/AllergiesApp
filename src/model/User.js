const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    passwordHash: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    tokenSeed: { type: String, required: true, unique: true },
    created: { type: Date, default: () => new Date() },
});

const User = mongoose.model('User', userSchema);

User.create([{
    passwordHash: 'password',
    email: 'svigil@gmail.com',
    username: 'svigil',
    tokenSeed: '1',
    created: new Date(Date.now())
  }, {
    passwordHash: 'word',
    email: 'dan@dan.com',
    username: 'dan',
    tokenSeed: '2',
    created: new Date(Date.now())
  }])

module.exports = User;
