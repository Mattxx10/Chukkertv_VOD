import './App.css';
import Row from './components/Row';
import requests from './api/requests';
import Banner from "./components/Banner";
import Nav from"./components/Nav";

function App() {

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row isLargeRow={true} title="Upcoming Broadcasts" fetchUrl={requests.fetchUpcoming} />
      <Row title="Teams" fetchUrl={requests.fetchTeams} />
      <Row title="World Polo League" fetchUrl={requests.fetchWpl} />
      <Row title="Daily News" fetchUrl={requests.fetchNews} />
      <Row title="Overtime" fetchUrl={requests.fetchOvertime} />
      <Row title="Shows" fetchUrl={requests.fetchShows} />
      <Row title="Interviews" fetchUrl={requests.fetchInterviews} />
      <Row title="Aspen Valley Polo Club" fetchUrl={requests.fetchAspenValley} />
      <Row title="Grand Champions Polo Club" fetchUrl={requests.fetchGcpc} />
    </div>
  );
}

export default App;
