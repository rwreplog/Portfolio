import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className="page">
        <span className="tags">
          &#123;
          <br />
          "Name": "Ryan W Replogle", <br />
          "Occupation": "Software Engineer", <br />
          "YearsOfExperience": 9, <br />
          "FavoriteCodingLanguage": "JavaScript",
          <br />
          &#125;
          <br />
        </span>

        <Outlet />
        <span className="tags bottom-tags">
          {/* &lt;/body&gt; */}

          {/* <span className="bottom-tag-html">&lt;/html&gt;</span> */}
        </span>
      </div>
    </div>
  )
}

export default Layout
