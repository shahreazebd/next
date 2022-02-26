import MeetupDetails from "../../components/meetups/MeetupDetails";

export default function MeetupDetailsPage(props) {
	return <MeetupDetails title={"Meetup 1"} />;
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "1",
				},
			},
			{
				params: {
					meetupId: "2",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	console.log(context.params.meetupId);

	return {
		props: {
			meetupData: {
				title: "Meetup 1",
			},
		},
	};
}
