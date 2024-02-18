function Student(props) {
    return (
        <div className="student">
            <h1>
                <p>
                    Name : {props.name}
                    <p>Age : {props.age}</p>
                    <p>Student : {props.isStudent ? "Yes" : "NO"}</p>
                </p>
            </h1>
        </div>
    );
}


Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
}

Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false,
}
export default Student;