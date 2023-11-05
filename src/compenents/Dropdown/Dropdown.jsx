
import { PopupMenu } from "react-simple-widgets";
import Logo from "../../assest/imgs/User.gif";

import './Dropdown.css'
function Dropdown() {

 return (
    <div id="app">
      <div className="text-end">
        <PopupMenu>
          <button className =" gif btn c-grey bg-white ">
            <small><img src={Logo}   alt='ok'/></small>
          </button>

          <div className="card text-start">
            <div className="card-body px-4 py-4">
              <div id="circle-avatar" className="text-center mx-auto mb-4">
                <span>Y</span>
              </div>

              <h5 className="text-center mb-0">yasseine</h5>
              <p className="text-center mb-2">yassine@gmail.com</p>

              <hr />

              <p
                className="mb-0"
                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
              >
                ROLES
              </p>
              <p style={{ fontSize: 12 }}>
                {["Submitter", "Project manager", "Change control board"].join(
                  ", "
                )}
              </p>

              <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

              <hr style={{ margin: "0 -24px 24px" }} />

              <div className="d-grid">
                <button className="btn btn-primary">
                  <small>Logout</small>
                </button>
              </div>
            </div>
          </div>
        </PopupMenu>
      </div>
    </div>
  );
}

export default Dropdown;
