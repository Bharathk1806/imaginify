// import mongoose, { Mongoose } from 'mongoose';

// const MONGODB_URL = process.env.MONGODB_URL;

// interface MongooseConnection{
//     conn: Mongoose | null;
//     promise: Promise<Mongoose> | null;
// }

// let cached: MongooseConnection = (global as any).mongoose
// if(!cached) {
//     cached = (global as any).mongoose = { 
//         conn: null, promise: null
//      }
//     }


//     export const connectToDatabase = async () => {
//         if(cached.conn) return cached.conn;

//         if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

//         cached.promise = 
//         cached.promise ||
//         mongoose.connect(MONGODB_URL, {dbName: 'imaginify',
//             bufferCommands: false 
//         })

//         cached.conn = await cached.promise;

//         return cached.conn;
//     }


import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // Extend the global namespace to include the mongoose connection
  // eslint-disable-next-line no-var
  var mongoose: MongooseConnection;
}

// If global.mongoose doesn't exist, initialize it
global.mongoose = global.mongoose || { conn: null, promise: null };

const cached = global.mongoose;

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URL) {
    throw new Error('Missing MONGODB_URL');
  }

  cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
    dbName: 'imaginify',
    bufferCommands: false,
  });

  cached.conn = await cached.promise;
  return cached.conn;
};
