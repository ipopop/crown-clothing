import React from 'react';
import './App.css';
import HomePage from './components/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="topics">Topics</Link>
      <h1>HATS PAGE </h1>
    </div>
  )
}

const TopicsPage = (props) => {
  console.log(props);
  return (
  <div>
    <button onClick={() => props.history.push('/hats')}>Hats Page </button>
    <h1>TOPICS PAGE </h1>
  </div>
)}

const TopicDetailPage = (props) => {
  console.log(props);
  return (
  <div>
    <h1>TOPIC DETAIL PAGE: { props.match.params.topicId } </h1>
    <Link to={`${props.match.url}/17`} >TO TOPIC 17</Link>
    <Link to={`${props.match.url}/23`} >TO TOPIC 23</Link>
    <Link to={`${props.match.url}/67`} >TO TOPIC 67</Link>
  </div>
)}

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/hats' component={HatsPage} />
        <Route exact={true} path='/topics' component={TopicsPage} />
        <Route path='/topics/:topicId' component={TopicDetailPage} />
      </Switch>
    </div>
  );
}

export default App;
