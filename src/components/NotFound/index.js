import './index.css'
import Header from '../Header'

const NotFound = () => (
  <div>
    <Header />
    <div className="notFound">
      <div>
        <img src="" alt="not found" />
      </div>
      <h1>Page not Found</h1>
      <p>We are sorry, the page you requested could no be found</p>
    </div>
  </div>
)
export default NotFound
