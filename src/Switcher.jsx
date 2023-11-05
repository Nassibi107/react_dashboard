

import Admin from './Admin';
import { Services,Users,Setting, Dash} from './compenents/index';
import "./master.css"
import "./framework.css"
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function Switcher() {
  return (
    <Router>
    <Admin>
    <Routes>
       <Route path="/" element={<Dash/>}  />
       <Route path="Services" element={<Services/>} />
       <Route path="Users" element={<Users/>} />
       <Route path="Setting" element={<Setting/>} />
    </Routes>
    </Admin>
    </Router>
  )
}

export default Switcher
