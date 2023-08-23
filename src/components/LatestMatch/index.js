import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails

  return (
    <div className="latest-match-box">
      <div className="match-box1">
        <div>
          <p className="">{competingTeam}</p>
          <p className="">{date}</p>
          <p className="">{venue}</p>
          <p className="">{result}</p>
        </div>
        <img
          className="team-logo-image1"
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
        />
      </div>
      <hr className="line" />
      <div className="match-box2">
        <h1 className="">First Innings</h1>
        <p className="">{firstInnings}</p>
        <h1 className="">Second Innings</h1>
        <p className="">{secondInnings}</p>
        <h1 className="">Man of the Match</h1>
        <p className="">{manOfTheMatch}</p>
        <h1 className="">Umpires</h1>
        <p className="">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
