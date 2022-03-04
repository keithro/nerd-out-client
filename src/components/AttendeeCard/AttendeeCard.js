import './AttendeeCard.css';

const AttendeeCard = (props) => {
  // console.log(props)
  const {
		id,
		name,
		phone,
		address,
		city,
		state,
		country,
		postalZip,
		email,
		company,
		companyFunded,
		userID,
		team,
		paid,
		date,
		title,
	} = props.attendee

  return (
    <div
      className="attendee-card"
      onClick={() => props.handleShowDetails(props.attendee)}
    >
      <h4 className="attendee-card-name">{name}</h4>
      <p>
        <span className="attendee-card-title">{title}</span> at{" "}
        <span className="attendee-card-company">{company}</span>
      </p>
      <p>
        <span className="attendee-card-city">{city}</span>,{" "}
        <span className="attendee-card-state">{state}</span>
      </p>
    </div>
  );
};

export default AttendeeCard;
