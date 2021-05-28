import React, {Component} from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/searchbox/searchbox.component.jsx'

class App extends Component{
  constructor(){
    super();
    this.state = {
      users: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({users: users}))
  }

  handleChange = (e) => {
    this.setState( {searchField: e.target.value} );
  }
  render(){
    const { users, searchField } = this.state
    const filteredUsers = users.filter( user => { 
      return user.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return(
    <div className="App">
      <h1>USERS BASE</h1>
      <SearchBox
        placeholder='look for users'
        handleChange={ e => this.handleChange(e) }
      />
      <CardList users={filteredUsers}/>
    </div>
    )
  }
}

// function App() {
//   return (

//   );
// }

export default App;
