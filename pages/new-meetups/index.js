import Head from "next/head";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
	async function onAddMeetup(value) {
		try {
			const response = await fetch("/api/new-meetup", {
				method: "POST",
				body: JSON.stringify(value),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<head>
				<title>Add new meetup</title>
				<meta name="description" content="Add new meetup" />
			</head>
			<NewMeetupForm onAddMeetup={onAddMeetup} />
		</>
	);
}
