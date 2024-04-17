import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("conectado");
  } catch (error) {
    console.log("não conectado");
    throw new Error(error);
  }
}
