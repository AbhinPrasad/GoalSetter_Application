import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

export default connectDB;
