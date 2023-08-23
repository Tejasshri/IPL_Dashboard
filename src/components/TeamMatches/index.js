import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBannerUrl: '',
    latestMatches: {},
    recentMatchesList: [],
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {teamBannerUrl, recentMatches, latestMatchDetails} = updatedData
    console.log(recentMatches)

    const updatedRecentMatches = recentMatches.map(each => ({
      result: each.result,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      matchStatus: each.match_status,
      umpires: each.umpires,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      date: each.date,
      venue: each.venue,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
    }))
    console.log(updatedRecentMatches)

    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    this.setState({
      teamBannerUrl,
      latestMatches: updatedLatestMatchDetails,
      recentMatchesList: updatedRecentMatches,
      isLoading: false,
    })
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {
      teamBannerUrl,
      recentMatchesList,
      latestMatches,
      isLoading,
    } = this.state

    return (
      <div className="team-matches-bg-container">
        {isLoading ? (
          this.renderLoader()
        ) : (
          <>
            <img
              className="team-banner-image"
              alt="team banner"
              src={teamBannerUrl}
            />
            <LatestMatch latestMatchDetails={latestMatches} />
            <ul className="recent-match-card-list">
              {recentMatchesList.map(eachMatch => (
                <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
