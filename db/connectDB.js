import mongoose from "mongoose";

 const connectDB = async (DATABASEURL) => {
    // const DB_OPTIONS ={
    //     dbName:'portfolio',

    // }
    // const data = await mongoose.connect(DATABASEURL,DB_OPTIONS)
    // if(data){
    //     console.log("Database connected successfully")
    // }
//  }
    try {
        const DB_OPTIONS = {
          dbName: 'portfolio',
        };
        const data = await mongoose.connect(DATABASEURL, DB_OPTIONS);
        if (data) {
          console.log('Database connected successfully');
        }
      } catch (err) {
        console.error('Database connection error:', err.message);
      }
    };


 export default connectDB;