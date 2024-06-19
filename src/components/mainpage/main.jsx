import "./main.scss";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Main() {
  const navigateLogin = useNavigate();
  const navigateConvert = useNavigate();
  const navigateList = useNavigate();
  return (
    <>
      <div className=".container">
        {/* start of nav bar  */}
        <div>
          <div className=" navBar d-flex p-2">
            <div className="logo mx-4">Bond Market</div>
            <div className="d-flex">
              <div>
                <button
                  className="loginbutton mx-4"
                  onClick={() => navigateLogin("/login")}
                >
                  Log In
                </button>
              </div>
              <div>
                <button
                  className="covertbutton mx-4"
                  onClick={() => navigateConvert("/convert")}
                >
                  Convert
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end of nav bar */}
        <div>
          <div className="remain">
            <div className="slider">
              {/* the single 10 image */}
              <div className="logos_list ">
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/52.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png"
                    alt=""
                  />
                </div>
                {/* the 2nd time double 10 image same */}
                {/* <div className="logos_list "> */}
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/52.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="logoimgself"
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png"
                    alt=""
                  />
                </div>
                {/* </div> */}
              </div>

              <div className="text_onimg">Bond NFC & Crypto World</div>
              <div>
                <button
                  className="listofcrypto"
                  onClick={() => navigateList("/list")}
                >
                  Live Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
