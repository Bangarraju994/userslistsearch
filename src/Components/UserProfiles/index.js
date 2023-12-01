import "./index.css";

const UserProfiles = (props) => {
    const {userDetails} = props
    const {name, role, age, centuries, Wickets} = userDetails

    return(
        <li>
            <div className="app">
              <div>
                <h1> {name} </h1>
              </div>              
                <h2> Role: {role} </h2>
                <h2> Age: {age} </h2>
                <h2> Centuries: {centuries} </h2>
                <h2> Wickets: {Wickets} </h2>
            </div>
        </li>
    )


};

export default UserProfiles;