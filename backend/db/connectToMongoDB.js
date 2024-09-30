import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        const MONGO_DB_URI = "mongodb+srv://kanhasumanmadan:MadankanhA@cluster0.is4cisi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;
