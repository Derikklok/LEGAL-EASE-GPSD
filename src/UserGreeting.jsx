import propTypes from 'prop-types';
function UserGreeting(props){
    const msgGreeting = <h2>Welcome {props.name}</h2>
    const msgLogin = <h2>Please Login {props.name}</h2>
    return(
        props.isLoggedIn ?  msgGreeting : msgLogin

    );
}
UserGreeting.propTypes = {
    name: propTypes.string,
    isLoggedIn: propTypes.bool,
}
UserGreeting.defaultProps = {
    isLoggedIn : false,
    name : "Guest",
}
export default UserGreeting