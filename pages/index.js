import MeetupList from "../components/meetups/MeetupList";

const MEETUP_DATA = [
	{
		id: 1,
		title: "Meetup 1",
		image:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
		address: "1/2, Germany",
		description: "Very Nice Place",
	},
	{
		id: 2,
		title: "Meetup 2",
		image:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
		address: "1/2, Germany",
		description: "Very Nice Place",
	},
	{
		id: 3,
		title: "Meetup 3",
		image:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
		address: "1/2, Germany",
		description: "Very Nice Place",
	},
];

export default function Home(props) {
	// console.log(props.context);
	return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
// 	return {
// 		props: {
// 			meetups: MEETUP_DATA,
// 		},
// 	};
// }

export async function getStaticProps() {
	const data = await (
		await fetch("https://jsonplaceholder.typicode.com/posts/1")
	).json();

	return {
		props: {
			pi: 3.1416,
			data: data,
			meetups: MEETUP_DATA,
		},
		revalidate: 1,
	};
}
