
import Adm from "../../assest/imgs/team-01.png"
function Dash() {


  const data =
  [
    {
    "Name": "Product A",
    "Finish": "2023-10-15",
    "Client": "Client X",
    "Price": 150.99,
    "Status": "In Progress"
   },
   {
      "Name": "Service B",
      "Finish": "2023-11-05",
      "Client": "Client Y",
      "Price": 75.50,
      "Status": "Completed"
  }
  ,
  {
    "Name": "Project C",
    "Finish": "2023-10-28",
    "Client": "Client Z",
    "Price": 500.00,
    "Status": "On Hold"
  }
  ,
  {
    "Name": "Task D",
    "Finish": "2023-12-10",
    "Client": "Client A",
    "Price": 30.25,
    "Status": "In Progress"
  },
  {
    "Name": "Product E",
    "Finish": "2023-11-20",
    "Client": "Client B",
    "Price": 199.99,
    "Status": "Completed"
 },
 {
  "Name": "Service F",
  "Finish": "2023-11-08",
  "Client": "Client C",
  "Price": 85.75,
  "Status": "In Progress"
}




  ]  

  return (
    <>
         <h1 className="p-relative">Dashboard</h1>
        <div className="wrapper d-grid gap-20">
          
          <div className="welcome bg-white rad-10 txt-c-mobile block-mobile">
            <div className="intro p-20 d-flex space-between bg-eee">
              <div>
                <h2 className="m-0">Welcome</h2>
                <p className="c-grey mt-5">yassine </p>
              </div>
              <img className="hide-mobile" src="imgs/welcome.png" alt="" />
            </div>
            <img src={Adm} alt="" className="avatar" />
            <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
              <div>yassine nassibi <span className="d-block c-grey fs-14 mt-10">Admin</span></div>
              <div>Ok!<span className="d-block c-grey fs-14 mt-10">auth</span></div>
              <div>30 <span className="d-block c-grey fs-14 mt-10">Earned</span></div>
            </div>
          </div>
          <div className="reminders p-20 bg-white rad-10 p-relative">
            <h2 className="mt-0 mb-25">Services Status</h2>
            <ul className="m-0">
              <li className="d-flex align-center mt-15">
                <span className="key bg-green mr-15 d-block rad-half"></span>
                <div className="pl-15 green">
                  <p className="fs-14 fw-bold mt-0 mb-5">Maga</p>
                  <span className="fs-13 c-grey">26/10/2022 - 12:00am</span>
                </div>
              </li>
              <li className="d-flex align-center mt-15">
                <span className="key bg-red mr-15 d-block rad-half"></span>
                <div className="pl-15 red">
                  <p className="fs-14 fw-bold mt-0 mb-5">Goldan</p>
                  <span className="fs-13 c-grey">20/12/2022 - 12:00am</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
         <div className="projects p-20 bg-white rad-10 m-20">
          <h2 className="mt-0 mb-20">Users -:</h2>
          <div className="responsive-table">
            <table className="fs-15 w-full">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Finish</td>
                  <td>Client</td>
                  <td>Price</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
               
                 {data.map((info) => (
                             < Table x={info} />
                        ))}
               
              </tbody>
            </table>
          </div>
        </div>
    </>
  )
}

function Table (props)
{
  return (
        <tr>
          <td>{props.x.Name}</td>
          <td>{props.x.Finish}</td>
          <td>{props.x.Client}</td>
          <td>{props.x.Price}</td>
          <td>{props.x.Status}</td>
        </tr>
  )
}

export default Dash