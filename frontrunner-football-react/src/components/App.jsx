import React from 'react';

import { leagueAPI } from "../assets/js/leagueApiUtil";
import LeagueTable from "./LeagueTableContainer";
import premFixtures from "../assets/js/fixtures_prem";
import serieAFixtures from "../assets/js/fixtures_serie_a";
import laLigaFixtures from "../assets/js/fixturesLaLiga";
import bundesligaFixtures from "../assets/js/fixturesBundesliga";
import ligue1Fixtures from "../assets/js/fixturesLigue1";
import eredivisieFixtures from "../assets/js/fixturesEredivisie";
import "../styles.css";

function App() {
  return (
    <div className="main">
      <h1>
        Frontrunner Football <span role="img"><span role="img" aria-label="football-trophy">⚽️🏆</span></span>
      </h1>
      <div className="league-table">
        <div className="league-table-header">
          <img
            alt="Flag of England"
            src="//upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/50px-Flag_of_England.svg.png"
          />
          <h2>Premier League</h2>
        </div>
        <LeagueTable
          api={leagueAPI.premierLeague}
          tierLimit={5}
          fixtures={premFixtures}
        />
      </div>

      <div className="league-table">
        <div className="league-table-header">
          <img
            alt="Flag of Italy"
            src="//upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/50px-Flag_of_Italy.svg.png"
          />
          <h2>Serie A</h2>
        </div>

        <LeagueTable
          api={leagueAPI.serieA}
          tierLimit={5}
          fixtures={serieAFixtures}
        />
      </div>
      <div className="league-table">
        <div className="league-table-header">
          <img
            alt="Flag of Spain"
            src="//upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/50px-Flag_of_Spain.svg.png"
          />
          <h2>La Liga</h2>
        </div>
        <LeagueTable
          api={leagueAPI.laLiga}
          tierLimit={5}
          fixtures={laLigaFixtures}
        />
        <div className="league-table"></div>
        <div className="league-table-header">
          <img
            alt="Flag of Germany"
            src="//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/50px-Flag_of_Germany.svg.png"
          />
          <h2>Bundesliga</h2>
        </div>
        <LeagueTable
          api={leagueAPI.bundesliga}
          tierLimit={5}
          fixtures={bundesligaFixtures}
        />
        <div className="league-table"></div>
        <div className="league-table-header">
          <img
            alt="Flag of France"
            src="//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/50px-Flag_of_France.svg.png"
          />
          <h2>Ligue 1</h2>
        </div>
        <LeagueTable
          api={leagueAPI.ligue1}
          tierLimit={4}
          fixtures={ligue1Fixtures}
        />
        <div className="league-table"></div>
        <div className="league-table-header">
          <img
            alt="Flag of the Netherlands"
            src="//upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/50px-Flag_of_the_Netherlands.svg.png"
          />
          <h2>Eredivisie</h2>
        </div>
        <LeagueTable
          api={leagueAPI.eredivisie}
          tierLimit={3}
          fixtures={eredivisieFixtures}
        />
      </div>
    </div>
  );
}

export default App;
