import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(process.env.MONGO);
    alert(" conectado");
  } catch (error) {
    alert("não conectado");
    throw new Error(error);
  }
}
