import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const MeetupSchema = new mongoose.Schema({
  title: String,
  image: String,
  address: String,
  description: String,
});

export default mongoose.models.Meetup || mongoose.model("Meetup", MeetupSchema);
