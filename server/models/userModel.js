import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add a name"]
		},
		email: {
			type: String,
			required: [true, "Please add an email"],
			unique: true
		},
		password: {
			type: String,
			required: [true, "Please add a password"]
		},
		phone: {
			type: Number,
			required: [true, "Please add a phone number"],
			unique: true
		}
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
