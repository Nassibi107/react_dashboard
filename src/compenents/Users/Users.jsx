import "bootstrap/dist/css/bootstrap.css"

function Users() {

  const data =
  [

    {
      "name": "John Doe",
      "gmail": "john.doe@gmail.com",
      "channels": "1200 channels",
      "bouquets": "14 bouquets",
      "status": "active"
    },
    {
      "name": "Jane Smith",
      "gmail": "jane.smith@gmail.com",
      "channels": "1300 channels",
      "bouquets": "15 bouquets",
      "status": "active"
    },
    {
      "name": "Mike Johnson",
      "gmail": "mike.johnson@gmail.com",
      "channels": "1400 channels",
      "bouquets": "12 bouquets",
      "status": "stop"
    },
    {
      "name": "Emily Brown",
      "gmail": "emily.brown@gmail.com",
      "channels": "1100 channels",
      "bouquets": "13 bouquets",
      "status": "stop"
    },
    {
      "name": "David Wilson",
      "gmail": "david.wilson@gmail.com",
      "channels": "1600 channels",
      "bouquets": "18 bouquets",
      "status": "active"
    }

  ]
  return (
    <>
       <h1 className="p-relative">All Users : </h1>
        <div className="friends-page d-grid m-20 gap-20">
            {data.map((info) => (
                             < UserData u={info} />
                        ))}
        </div>
    </>
  )
}

function UserData (props)
{
    return(
      //  "name": "Mike Johnson",
      // "gmail": "mike.johnson@gmail.com",
      // "channels": "1400 channels",
      // "bouquets": "12 bouquets",
      // "status": "stop"
      <div className="friend bg-white rad-6 p-15 p-relative">
            <div className="txt-c">
              <h4 className="m-0">{props.u.name}</h4>
              <span className="c-grey">{props.u.gmail}</span>
            </div>
            <div className="icons fs-14 p-relative">
              <div className="mb-10">
                <i className="fa-regular fa-face-smile fa-fw"></i>
                <span>{props.u.channels}</span>
              </div>
              <div className="mb-10">
                <i className="fa-solid fa-code-commit fa-fw"></i>
                <span>15 bouquets</span>
              </div>
              {
               (props.u.status === 'active') ?
                  <span className="vip fw-bold c-green">{props.u.status}</span>
                : <span className="vip fw-bold c-red">{props.u.status}</span>
              }
            </div>
            <div className="info between-flex fs-13">
                <button className="bg-blue c-white btn btn-outline-warning" href="profile.html">Edit</button>
                <button className="bg-red c-white btn btn-outline-danger" href="ddd"
                onClick={ () =>{window.confirm('Are sure want to delete?')}}

                >Remove</button>
          </div>
        </div>
     )
}
export default Users
