import moment from "moment";

const checkIfClubPlay = (fixtures, club) => {
  for (let i = 0; i < fixtures.length; i++) {
    let fixture = fixtures[i];
    if (fixture.homeTeam === club || fixture.awayTeam === club) {
      return fixture;
    }
  }
};

export const getNextMatch = (fixtures, club, cb) => {
  let fixtureDates = Object.keys(fixtures);
  for (let i = 0; i < fixtureDates.length; i++) {
    let key = fixtureDates[i];
    // console.log("key", key);
    let dateStuff = key.split("/");
    let newDate = new Date(dateStuff[2], dateStuff[1] - 1, dateStuff[0]);
    // console.log("newDate", newDate);
    let today = new Date();
    today.setHours(0, 0, 0);
    // console.log("today", today);
    // console.log("newDate", newDate);
    // console.log("isEqual?", today.getTime() === newDate.getTime());
    if (newDate.getTime() >= today.getTime()) {
      // console.log("stop");
      let fixta = checkIfClubPlay(fixtures[key], club);
      if (fixta) {
        // console.log("fixta", fixta);
        cb(fixta);
        break;
      }
    }
  }
};

export const generatePopoverData = (hook, fixture) => {
  const open = Boolean(hook);
  const id = open ? "simple-popover" : undefined;
  const homeTeam = fixture ? fixture.homeTeam : null;
  const awayTeam = fixture ? fixture.awayTeam : null;
  const matchDate = fixture ? fixture.date : null;
  const matchTime = fixture ? fixture.time : null;
  let timeInfo = matchTime ? matchTime.split(":") : null;
  let dateStuff = matchDate ? matchDate.split("/") : null;
  let str = dateStuff ? `${dateStuff[2]}${dateStuff[1]}${dateStuff[0]}` : null;

  let newDate =
    dateStuff && timeInfo
      ? new Date(
        dateStuff[2],
        dateStuff[1] - 1,
        dateStuff[0],
        timeInfo[0] - 5,
        timeInfo[1]
      ).toLocaleString()
      : null;

  let momentDate = str ? moment(`${str}`, "YYYYMMDD hh:mm").fromNow() : null;

  return {
    id,
    open,
    momentDate,
    homeTeam,
    awayTeam,
    newDate
  }
}