import UserProfiles from "./Components/UserProfiles";
import { Component } from "react";

const userDetailsList = [
    { 
      uniqueNo: 1,
      name: 'Virat Kohli',
      role: 'Right-Arm Batsman',
      age: 35,
      centuries: 80,
      Wickets: 300
    },
    { 
      uniqueNo: 2,
      name: 'AB Devilliers',
      role: 'Right-Arm Batsman',
      age: 39,
      centuries: 50,
      Wickets: 300
    },
    { 
      uniqueNo: 3,
      name: 'MS Dhoni',
      role: 'Right-Arm Batsman',
      age: 41,
      centuries: 35,
      Wickets: 300
    },
    { 
      uniqueNo: 4,
      name: 'Rohit Sharma',
      role: 'Right-Arm Batsman',
      age: 36,
      centuries: 50,
      Wickets: 300
    },
    { 
      uniqueNo: 5,
      name: 'Suresh Raina',
      role: 'Left-Arm Batsman',
      age: 38,
      centuries: 42,
      Wickets: 300
    },
    { 
      uniqueNo: 6,
      name: 'Jasprit Bhumra',
      role: 'Right-Arm Fast Bowler',
      age: 30,
      centuries: 0,
      Wickets: 300
    }
]


class UserDetails extends Component {
  render(){
    return(
  <div > 
    <div className="app">
      <h1> Users List </h1>
      <input type="serch"/>
    </div>
    <div> 
      <ul>
        {userDetailsList.map((eachItem) => 
        (<UserProfiles userDetails = {eachItem}/>
        ))}
      </ul>
    </div>
  </div>)}}


export default UserDetails;