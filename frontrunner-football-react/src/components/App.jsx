import React from 'react';

import leagues from "../assets/js/leagueData";
import "../styles.css";
import LeagueTable from './TableAndHeaderContainer';

const tables = Object.values(leagues).map(league => {
  return (
    <LeagueTable
      key={league.leagueName}
      leagueName={league.leagueName}
      imgAlt={league.imgAlt}
      imgSrc={league.imgSrc}
      standingsApi={league.standingsApi}
      fixtures={league.fixtures}
      tierLimit={league.tierLimit}
    />
  )
})

function App() {
  return (
    <div className="main">
      <h1>
        Frontrunner Football <span role="img"><span role="img" aria-label="football-trophy">⚽️🏆</span></span>
      </h1>
      { tables }
    </div>
  );
}

export default App;