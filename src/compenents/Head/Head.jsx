import {FaBullhorn as Not} from "react-icons/fa" ;
import ImgProfile from "../../assest/imgs/avatar.png"
import Dropdown from "../Dropdown/Dropdown";
function Head() {
  return (
       
         <div className="head  p-15 between-flex">
            <div className="search p-relative">
              <input className="p-10" type="search" placeholder="Type A Keyword" />
            </div>
          <div className="icons d-flex align-center">
            <Dropdown/>
          </div>
        </div>
       
       )
    }
    
    export default Head