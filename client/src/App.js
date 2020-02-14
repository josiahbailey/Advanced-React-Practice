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
    render() {
      return (
        <div className="App">
          <h1>Happy building <span role="img" aria-label="Smiling emoji">😃</span></h1>
          <PlayerList players={this.state.players}/>
        </div>
      )
    }
}

export default App;
