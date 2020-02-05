import premFixtures from "./fixtures_prem";
import serieAFixtures from "./fixtures_serie_a";
import laLigaFixtures from "./fixturesLaLiga";
import bundesligaFixtures from "./fixturesBundesliga";
import ligue1Fixtures from "./fixturesLigue1";
import eredivisieFixtures from "./fixturesEredivisie";
import { leagueAPI } from "./leagueApiUtil";

const leagueData = {
  premiereLeague: {
    leagueName: "Premier League",
    imgAlt: "Flag of England",
    imgSrc: "//upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/50px-Flag_of_England.svg.png",
    standingsApi: leagueAPI["premierLeague"],
    fixtures: () => premFixtures,
    tierLimit: 5
  },
  serieA: {
    leagueName: "Serie A",
    imgAlt: "Flag of Italy",
    imgSrc: "//upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/50px-Flag_of_Italy.svg.png",
    standingsApi: leagueAPI["serieA"],
    fixtures: () => serieAFixtures,
    tierLimit: 5
  },
  bundesliga: {
    leagueName: "Bundesliga",
    imgAlt: "Flag of Germany",
    imgSrc: "http://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/50px-Flag_of_Germany.svg.png",
    standingsApi: leagueAPI["budesliga"],
    fixtures: () => bundesligaFixtures,
    tierLimit: 5
  },
  laLiga: {
    leagueName: "La Liga",
    imgAlt: "Flag of Spain",
    imgSrc: "http://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/50px-Flag_of_Spain.svg.png",
    standingsApi: leagueAPI["laLiga"],
    fixtures: () => laLigaFixtures,
    tierLimit: 5
  },
  ligue1: {
    leagueName: "Ligue 1",
    imgAlt: "Flag of France",
    imgSrc: "http://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/50px-Flag_of_France.svg.png",
    standingsApi: leagueAPI["ligue1"],
    fixtures: () => ligue1Fixtures,
    tierLimit: 5
  },
  eredivisie: {
    leagueName: "Eredivisie",
    imgAlt: "Flag of the Netherlands",
    imgSrc: "http://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/50px-Flag_of_the_Netherlands.svg.png",
    standingsApi: leagueAPI["eredivisie"],
    fixtures: () => eredivisieFixtures,
    tierLimit: 5
  }
}

export default leagueData;