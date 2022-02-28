import connectMongo from "../../db/connect";
import Meetup from "../../models/Meetup";
// api/new-meetup

export default async function handler(req, res) {
	const { method } = req;

	await connectMongo();

	if (method === "POST") {
		try {
			const meetup = await Meetup.create(req.body);
			/* create a new model in the database */
			console.log(meetup);
			res.status(201).json({ success: true, data: meetup });
		} catch (error) {
			res.status(400).json({ success: false });
		}
	}
}
