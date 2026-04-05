const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace the string below with your Atlas connection string if not using local
    await mongoose.connect('mongodb+srv://kimloh_admin:admin@cluster0.o55wn6k.mongodb.net/'); 
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Connection Failed:', err.message);
    process.exit(1); // Stop the app if connection fails
  }
};

// Mongoose.schema
const userSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: 'Name is required' },
  email: { type: String, trim: true, unique: 'Email already exists', match: [/.+\@.+\..+/,'Please fill a valid email address'], required: 'Email is required' },
  hashed_password: {type: String},
  salt: String,
  updated: Date,
  created: {
    type:Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

// Methods
async function createUsers (name, emmail, password) {
    const user = new User({name:name, email:email, password:password})
    await user.save();
    console.log('New User: ' + name + "Email: " + email)
}

async function listUsers () {
    let users = await user.find({}, {name:1, email:1, _id:0});
    console.log(users);
}

async function updateUsers (name, newname) {
    const user = await user.updateOne ({name:name},{$set: {name:newname}});
    console.log('New User: ' + name + "to: " + newname)
}


module.exports = connectDB;