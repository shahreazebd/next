import classes from "./MeetupDetails.module.css";

export default function MeetupDetails(props) {
	const { title, address, description, image } = props;
	return (
		<section>
			<img src={image} alt={title} />
			<h1>{title}</h1>
			<address>{address}</address>
			<p>{description}</p>
		</section>
	);
}
