import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import "../styles.css";

import { getNextMatch, generatePopoverData } from '../assets/js/popoverUtil';

export default function CustomizedTables(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [fixture, setFixture] = React.useState(null);

  const { tierLimit, fixtures, teams } = props;

  const rows = Object.entries(teams).map(([pos, team]) => ({
    position: pos, 
    team: team.name, 
    gamesPlayed: team.gamesPlayed, 
    points: team.points
  }));

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    let club = event.currentTarget.querySelector("td").innerText;
    getNextMatch(fixtures, club, setFixture);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    id,
    open,
    momentDate,
    homeTeam,
    awayTeam,
    newDate
  } = generatePopoverData(anchorEl, fixture)

  return (
    <Paper>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Pos</TableCell>
            <TableCell align="left">Team</TableCell>
            <TableCell align="right">GP</TableCell>
            <TableCell align="right">Pts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, tierLimit).map(row => (
            <TableRow key={row.position} onClick={handleClick}>
              <TableCell align="left" component="th" scope="row">
                {row.position}
              </TableCell>
              <TableCell align="left">{row.team}</TableCell>
              <TableCell align="right">{row.gamesPlayed}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <div>
            <div>NEXT MATCH {momentDate}</div>
            <h3>{homeTeam} vs {awayTeam}</h3>
            <div>{newDate}</div>
          </div>
        </Popover>
      </Table>
    </Paper>
  );
}