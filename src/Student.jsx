
function Student(props){

    return(
        <div className="studentDet">
            <p>Name: {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student: {props.isStudent ?  "I'm a student" : "Not a student"}</p>

        </div>
    );

}

export default Student