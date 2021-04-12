import './App.css';
import Beersdetails from './components/Beersdetails';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props)
    this.state ={
      error: null,
      isLoaded: false,
      items: [],
    }
  }

  getBeer(id) {
    return this.state.items.filter(beer => beer._id === id );
  }

  componentDidMount() {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then(res => res.json())
      .then( 
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  
  render() {
    return (
    <Router>
      <div className="App">
        <div className="">
          <nav className="fixed bottom-0 bg-yellow-300 w-full py-4">
                <Link className="w-8 text-4xl bg-white rounded-full p-1" to="/">🍻</Link>
          </nav>
          <Switch>
          <Route exact path="/randombeer">
              <RandomBeer />
            </Route>
            <Route path="/beersdetails/:id">
              <Beersdetails getBeer={e => this.getBeer(e)} />
            </Route>
            <Route path="/beers">
              <Beers beers={this.state.items} />
            </Route>
            <Route path="/">
                <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
}

export default App;
