const mongoose = require('mongoose');

// (node:1892) [MONGOOSE] DeprecationWarning: the 'strictQuery' - off
mongoose.set('strictQuery', true);

//function to connect
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB connected');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

dbConnect();
