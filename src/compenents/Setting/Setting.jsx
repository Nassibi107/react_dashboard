import  './Setting.css'

function Setting() {
  return (

      <div className="content w-full">
        <h1 className="p-relative">Settings</h1>
        <div className="settings-page m-20 d-grid gap-20">
          <div className="p-20 bg-white rad-10">
            <h2 className="mt-0 mb-10">General Info</h2>
            <p className="mt-0 mb-20 c-grey fs-15">General Information About Your Account</p>
            <div className="mb-15">
              <label className="fs-14 c-grey d-block mb-10" for="first">First Name</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                type="text"
                id="first"
                placeholder="First Name"
              />
            </div>
            <div className="mb-15">
              <label className="fs-14 c-grey d-block mb-5" for="last">Last Name</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                id="last"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-15">
              <label className="fs-14 c-grey d-block mb-5" for="email">email</label>
              <input
                className="b-none border-ccc p-10 rad-6 d-block w-full"
                id="last"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label className="fs-14 c-grey d-block mb-5" for="password">password</label>
              <input
                className="email b-none border-ccc p-10 rad-6 w-full mr-10"
                id="email"
                type="password"
                value="******"
                disabled
              />
              <a className="c-blue" href="#">Change</a>
            </div>
          </div>
          <div className="p-20 bg-white rad-10">
            <h2 className="mt-0 mb-10">Security Info</h2>
            <p className="mt-0 mb-20 c-grey fs-15">Security Information About Your Account</p>
            <div className="sec-box mb-15 between-flex">
              <div>
                <span>email</span>
                <p className="c-grey mt-5 mb-0 fs-13">Last Change On 25/10/2021</p>
              </div>
              <a className="button bg-blue c-white btn-shape" href="#">Change</a>
            </div>
            <div className="sec-box mb-15 between-flex">
              <div>
                <span>Two-Factor Authentication</span>
                <p className="c-grey mt-5 mb-0 fs-13">Enable/Disable The Feature</p>
              </div>
              <label>
                <input className="toggle-checkbox" type="checkbox" checked />
                <div className="toggle-switch"></div>
              </label>
            </div>
            <div className="sec-box between-flex">
              <div>
                <span>Devices</span>
                <p className="c-grey mt-5 mb-0 fs-13">Check The Login Devices List</p>
              </div>
              <a className="bg-eee c-black btn-shape" href="#">Devices</a>
            </div>
          </div> 
        </div>
      </div>
    )
}

export default Setting