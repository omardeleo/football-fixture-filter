import React from "react";
import LeagueTable from './LeagueTableContainer';

function TableAndHeaderContainer({
  leagueName,
  imgAlt,
  imgSrc,
  standingsApi,
  fixtures,
  tierLimit
}) {
  return (
    <div className="league-table">
      <div className="league-table-header">
        <img
          alt={imgAlt}
          src={imgSrc}
        />
        <h2>{leagueName}</h2>
      </div>
      <LeagueTable
        api={standingsApi}
        tierLimit={tierLimit}
        fixtures={fixtures()}
      />
    </div>
  )
}

export default TableAndHeaderContainer;