import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImageUrl, name} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="team-card">
        <img className="team-card-image" alt={name} src={teamImageUrl} />
        <p className="team-card-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
