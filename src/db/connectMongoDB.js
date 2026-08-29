import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  console.log('Connecting to MongoDB...');

  await mongoose.connect(process.env.MONGO_URL);

  console.log('✅ MongoDB connection established successfully');
};