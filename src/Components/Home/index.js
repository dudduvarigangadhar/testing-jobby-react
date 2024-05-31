import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = props => {
  const renderJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <div className="Home-container">
      <Header />
      <div className="find-job-content">
        <h1 className="find-jobs-heading">Find The Job That Fits Your Life</h1>
        <p className="find-jobs-description">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.{' '}
        </p>
        <Link to="/jobs">
          <button
            type="button"
            alt="find jobs"
            className="find-job-btn"
            onClick={renderJobs}
          >
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
