import "./login.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  json,
} from "react-router-dom";



function Login(){
  return(
    <>
    <div>
      <div>
        {/* <h1 className="hello_test">hello Index </h1> */}
      <div className="completeBackground">
        <div className="betweenDesign">
          {/* the left side detiels which is blured  */}

          <div className="leftblur">
            <p>Welcome to Bond Crypto World.</p>
          </div>

          {/* the right side detiles which need to fill  */}

          <div className="rightdetiles">
            <p className="right_sign_up_text p-3">Sign Up</p>
            <p className="right_pa1">
              {" "}
              Manage all your lyalty product efficintly from one Place now on{" "}
            </p>
            <p className="right_pa2">
              {" "}
              Lets get all your required setup information & get started
            </p>

            <div className="textbox_main">
              <div className="textbox_left m-2">
                {" "}
                <form>
                  <div className="row mb-6">
                    <div className="col-12 col-lg-6">
                      <label></label>
                      
                      <input
                        type="text"
                        className="box w-80 m-2 border-1 border-primary rounded"
                        id="entername"
                        name="Helo"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label></label>
                      
                      <input
                        type="text"
                        name="email"
                        id="enteremail"
                        className="w-80 m-2 border-1 border-primary rounded"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="row mb-6">
                    <div className="col-12 col-lg-6">
                      <label></label>
                     
                      <input
                        type="text"
                        className="w-80 m-2 border-1 border-primary rounded"
                        name="Helo"
                        id="enterlocation"
                        placeholder="Location"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label></label>
                    
                      <input
                        type="text"
                        name="email"
                        className="w-80 m-2 border-1 border-primary rounded"
                        id="enterphone"
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  <div className="row mb-6">
                    <div className="col-12 col-lg-6">
                      <label></label>
                      
                      <input
                        type="text"
                        className="w-80 m-2 border-1 border-primary rounded"
                        name="Helo"
                        id="enterpassword"
                        placeholder="Password"
                      />
                    </div>
                    <div className="col-12 col-lg-6">
                      <label></label>
                     
                      <input
                        type="text"
                        name="email"
                        className="w-80 m-2 border-1 border-primary rounded"
                        id="enterconfirmpassword"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  {/* <input type="text" name="Helo" placeholder="Name"/>
        <label ></label> */}
                  {/* <br></br>
        <input type="text" name="Helo" placeholder="Location"/>
        <label ></label>
        <br></br>
        <input type="text" name="Helo" placeholder="Password"/>
        <label ></label> */}
                </form>
              </div>

              {/* <div className="textbox_right">  <form>
        <input type="text" name="Helo" placeholder="Email" className="insidetext" ></input>
        <label className="insidetext"></label>
        <br></br>
        <input type="text" name="Helo" placeholder="Phone"></input>
        <label ></label>
        <br></br>
        <input type="text" name="Helo" placeholder="Confirm Password"></input>
        <label ></label>
    </form>
    
    </div> */}
            </div>

            <form className="tickbox p-3">
              <input type="checkbox" />
              <label className="ps-2">
                Yes, I agree with <spam> Terms, Policy and Fees</spam>
              </label>
              <br></br>
              <input type="checkbox"  />
              <label className="p-2">Yes, I want to recive promotional email</label>
            </form>
            <div className="createbutton d-flex justify-content-center">
              <button className="rounded border-1 border-primary mb-3">Create</button>
          {/* <button onClick={} className="rounded border-1 border-primary mb-3">Create</button> */}
            </div>
          </div>
        </div>
      </div>
        
        </div>
        </div>
        </>
  )
}
export default Login;