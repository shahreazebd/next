import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
	function onAddMeetup(val) {
		console.log(val);
	}

	return <NewMeetupForm onAddMeetup={onAddMeetup} />;
}
