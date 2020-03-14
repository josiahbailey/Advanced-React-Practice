import React from 'react';
import axios from 'axios'
import PlayerList from './components/PlayerList'
import './App.css';

class App extends React.Component {
    constructor(){
      super()
      this.state = {
        players: []
      }
    }
    componentDidMount(){
      axios.get('http://localhost:5000/api/footballers')
      .then(res => {
        console.log(res.data)
        this.setState({
          players: res.data
        })
      })
      .catch(err => {
        console.log('ERROR', err)
      })
    }
    //<h1>Happy building <span role="img" aria-label="Smiling emoji">😃</span></h1>
    render() {
      return (
        <div className="App">
        <nav className='navbar'>
          <h1 className='nav-title'>Title</h1>
          <button className='button'></button>
        </nav>
          <PlayerList players={this.state.players}/>
        </div>
      )
    }
}

export default App;
