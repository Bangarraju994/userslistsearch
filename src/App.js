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
  state = {searchInput: '' }

  onChangeSearchInput = (event) => {
    this.setState({searchInput: event.target.value})
  }

  render(){
      const {searchInput} = this.state
      const searchResults = userDetailsList.filter((eachUser)=> eachUser.name.includes(searchInput));
    return(
  <div > 
    <div className="app">
      <h1> Users List </h1>
      <input type="serch" value={searchInput} onChange={this.onChangeSearchInput}/>
    </div>
    <div> 
      <ul>
        {searchResults.map((eachUser) => 
        (<UserProfiles userDetails = {eachUser} key={eachUser.uniqueNo}/>
        ))}
      </ul>
    </div>
  </div>)}}


export default UserDetails;