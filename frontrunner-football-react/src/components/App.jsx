import React, {useEffect, useState} from "react";
import "../styles.css";
import { formatDistanceToNow, subHours } from "date-fns";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import leaguesData from "../assets/js/leagueData";

const useStyles = makeStyles({
  fixture: {
    display: "flex",
    flexDirection: "column",
    background: "black",
    alignItems: "center",
    width: "100%",
    maxWidth: "400px",
    marginBottom: "10px",
    border: "1px solid gray",
    color: "white"
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    cursor: "default",
    paddingRight: "55px",
    alignItems: "center",
    justifyContent: "center",
    height: "40px"
    // background: "red"
  },
  homePos: {
    // marginRight: "15px",
    marginTop: "5px",
    minWidth: "25px",
    display: "flex",
    // flexDirection: "row"
    alignItems: "center",
    justifyContent: "center",
    height: "25px"
  },
  awayPos: {
    // marginLeft: "15px",
    marginTop: "5px",
    minWidth: "25px",
    display: "flex",
    background: "blue",
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "25px"
  },
  versus: { margin: "0px 15px" },
  teamRank: {
    display: "flex"
    // background: "green"
  },
  homeTeam: {
    // background: "blue",
    display: "flex",
    justifyContent: "flex-end"
  },
  awayTeam: {},
  name: {
    minWidth: "80px",
    // background: "pink",
    fontWeight: "600",
    fontSize: "1.5em"
  },
  flag: {
    // background: "purple",
    width: "50px",
    height: "30px",
    marginRight: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      border: "1px solid gray"
    }
  },
  date: {
    color: "white",
    fontSize: "0.8em",
    marginTop: "3px"
    // height: "10px"
    // fontStyle: "italic"
  },
  blue: {
    background: "blue"
  },
  gray: {
    background: "gray"
  },
  loading: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    fontSize: "2em",
    color: "white"
  }
});

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    fetch("https://frontrunner-football-node.herokuapp.com/fixtures/all")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFixtures(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const classes = useStyles();

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className={classes.loading}>Loading...</div>;
  } else {
  return (
    <div className="App">
      <h1>
        FRONTRUNNER FOOTBALL{" "}
        <span role="img" aria-label="soccer emojis">
          ⚽️🏆
        </span>
      </h1>
      {fixtures.map((fixture) => {
        const {
          homeTeamPos,
          homeTeam,
          awayTeam,
          awayTeamPos,
          date,
          homeAbbr,
          awayAbbr,
          league
        } = fixture;
        const leagueData = leaguesData[league];
        let fixtureDate = formatDistanceToNow(subHours(new Date(date), 5));
        fixtureDate = fixtureDate.includes("about")
          ? fixtureDate.slice(6)
          : fixtureDate;
        return (
          <Card className={classes.fixture} key={`${homeTeam}${homeTeam}`}>
            <Typography className={classes.date}>
              <span role="img" aria-label="clock">
                ⌚️
              </span>{" "}
              in {fixtureDate}
            </Typography>
            <div className={classes.cardContent}>
              <div className={classes.flag}>
                <img src={leagueData.imgSrc} alt={leagueData.imgAlt} />
              </div>
              <div className={`${classes.teamRank} ${classes.homeTeam}`}>
                <Typography
                  className={`${classes.homePos} ${
                    homeTeamPos < 6 ? classes.blue : classes.gray
                  }`}
                >
                  {homeTeamPos}
                </Typography>
                <Typography title={homeTeam} className={classes.name}>
                  {homeAbbr}
                </Typography>
              </div>
              <Typography className={classes.versus}>vs</Typography>
              <div className={classes.teamRank}>
                <Typography title={awayTeam} className={classes.name}>
                  {awayAbbr}
                </Typography>
                <Typography
                  className={`${classes.awayPos} ${
                    awayTeamPos < 6 ? classes.blue : classes.gray
                  }`}
                >
                  {awayTeamPos}
                </Typography>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
  }
}
