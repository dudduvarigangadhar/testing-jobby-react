import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'

import {BsBriefcaseFill} from 'react-icons/bs'
import './index.css'

const Header = props => {
  const onLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const renderHome = () => {
    const {history} = props
    history.replace('/')
  }

  const renderJobsBy = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <ul className="navbar-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="navbar-logo-img"
          onClick={renderHome}
        />
      </Link>
      <div className="route-div-container">
        <Link to="/" className="content" onClick={renderHome}>
          <p>Home</p>
        </Link>
        <Link to="/jobs" className="content" onClick={renderJobsBy}>
          <p>Jobs</p>
        </Link>
      </div>
      <button className="logout-button" type="button" onClick={onLogOut}>
        Logout
      </button>
      <div className="icons-container">
        <AiFillHome className="home-icon" size={25} onClick={renderHome} />
        <BsBriefcaseFill
          className="briefcase-icon"
          size={25}
          onClick={renderJobsBy}
        />
        <FiLogOut className="logout-icon" size={25} onClick={onLogOut} />
      </div>
    </ul>
  )
}

export default withRouter(Header)
