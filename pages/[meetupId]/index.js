import Head from "next/head";

import connectMongo from "../../db/connect";
import Meetup from "../../models/Meetup";

import MeetupDetails from "../../components/meetups/MeetupDetails";

// Meetup Details Page
export default function MeetupDetailsPage(props) {
	const { title, description, address, image } = props.meetupData;
	return (
		<>
			<head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</head>
			<MeetupDetails
				title={title}
				description={description}
				address={address}
				image={image}
			/>
		</>
	);
}

export async function getStaticPaths() {
	await connectMongo();

	const meetups = await Meetup.find({}).select({ _id: 1 });

	return {
		fallback: false,
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
}

export async function getStaticProps(context) {
	console.log(context.params.meetupId);

	let meetup;

	try {
		await connectMongo();

		meetup = await Meetup.findById(context.params.meetupId);
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			meetupData: {
				title: meetup.title,
				description: meetup.description,
				image: meetup.image,
				address: meetup.address,
			},
		},
	};
}
