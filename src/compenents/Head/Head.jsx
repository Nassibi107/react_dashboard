import {FaBullhorn as Not} from "react-icons/fa" ;
import ImgProfile from "../../assest/imgs/avatar.png"
function Head() {
  return (
       
         <div className="head  p-15 between-flex">
            <div className="search p-relative">
              <input className="p-10" type="search" placeholder="Type A Keyword" />
            </div>
          <div className="icons d-flex align-center">
            <span className="notification p-relative">
            <Not />
            </span>
            <img src={ImgProfile} alt="cc" />
          </div>
        </div>
       
       )
    }
    
    export default Head