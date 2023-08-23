import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  return (
    <li className="recent-match-card">
      <img
        className="recent-match-card-image"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="competing-team-heading">{competingTeam}</p>
      <p>{result}</p>
      <p className="match-status-heading">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
