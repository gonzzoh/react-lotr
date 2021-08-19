function Movie(props) {
    return (
        <div>
            <h1> Title: {props.title}</h1>
            <p>Length: {props.hours} Hours, {props.minutes} minutes</p>
        </div>
    )
}

export default Movie;