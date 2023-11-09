

import Admin from './Admin';
import { Services,Users,Setting, Dash} from './compenents/index';
import "./master.css"
import "./framework.css"
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MySubscribtion from './compenents/MySubscribtion/MySubscribtion';
function Switcher() {
  return (
    <Router>
    <Admin>
    <Routes>
       <Route path="/" element={<Dash/>}  />
       <Route path="Services" element={<Services/>} />
       <Route path="Users" element={<Users/>} />
       <Route path="Setting" element={<Setting/>} />
       <Route path="/Services/package/:id" element={<MySubscribtion/>} />
       </Routes>
    </Admin>
    </Router>
  )
}

export default Switcher
