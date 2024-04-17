import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect("mongodb+srv://jeanprecoreal:HkY3cgvAq276i3HO@cluster0.8dyfnq1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

  );
    alert(" conectado");
  } catch (error) {
    alert("não conectado");
    throw new Error(error);
  }
}
