import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";
import connectMongo from "../db/connect";
import Meetup from "../models/Meetup";

export default function Home(props) {
	return (
		<>
			<Head>
				<title>Meetup</title>
				<meta name="description" content="Browse a list of meetup" />
			</Head>
			<MeetupList meetups={props.meetups} />
		</>
	);
}

// export async function getServerSideProps(context) {
// 	return {
// 		props: {
// 			meetups: MEETUP_DATA,
// 		},
// 	};
// }

export async function getStaticProps() {
	await connectMongo();

	const meetups = await Meetup.find();

	const mapped = meetups.map((e) => ({
		title: e.title,
		image: e.image,
		description: e.description,
		id: e._id.toString(),
	}));

	return {
		props: {
			pi: 3.1416,
			meetups: mapped,
		},
	};
}
