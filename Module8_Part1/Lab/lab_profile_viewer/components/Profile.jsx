export default function Profile(props) {
    const containerStyle = {
        border: "1px solid black",
        width: "600px",
        height: "150px",
        padding: "10px",
        borderRadius: "5px",
    };

    const imageContainerStyle = {
        display: "absolute",
        float: "left",
    };

    const imageStyle = {
        width: "150px",
        borderRadius: "50%",
        background: "#ccc",
    };

    const descriptionContainerStyle = {
        float: "left",
        width: "400px",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "20px 10px",
    };

    //destructure the individual fields from the props
    const {
        first_name,
        last_name,
        avatar,
        email,
        phone_number,
        date_of_birth,
        employment: {title, key_skill},
    } = props;

    return (
        <div style={containerStyle}>
            <div style={imageContainerStyle}> 
                <img style={imageStyle} src={avatar}/>
            </div>
            <div style={descriptionContainerStyle}>
                <div style={{ fontWeight: "bold" }}> {first_name} {last_name}</div>
                <div>{email}</div>
                <div>{phone_number}</div>
                <div>{date_of_birth}</div>
                <div>{title} - {key_skill}</div>
            </div>
        </div>
    );
}

