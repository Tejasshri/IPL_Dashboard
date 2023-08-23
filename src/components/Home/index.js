import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    isLoading: true,
    teamsList: [],
  }

  componentDidMount() {
    this.getMatchList()
  }

  getMatchList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({isLoading: false, teamsList: updatedData})
  }

  render() {
    const {isLoading, teamsList} = this.state

    return (
      <div className="home-bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          /* testis is used to pass test cases */
          <>
            <div className="home-heading-logo-container">
              <img
                className="home-logo-image"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1 className="home-page-heading">IPL Dashboard</h1>
            </div>
            <ul className="match-card-list-container">
              {teamsList.map(eachTeam => (
                <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
