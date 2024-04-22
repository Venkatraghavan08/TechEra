import {Component} from 'react'
import './index.css'
import Link from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <Link to="/">
            <img
              className="headerLogo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            />
          </Link>
        </div>
      </div>
    )
  }
}
export default Header
