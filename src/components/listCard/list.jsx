import "./list.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import { useEffect, useState } from "react";

function List() {
  const [coinData, setCoinData] = useState([]);
  // console.log(coinData);
  useEffect(() => {



    const loading = document.querySelector('.loading');
    const content = document.querySelector('.content');
    setTimeout(() => {
      loading.style.opacity = "0";
      content.style.opacity = "1";
    }, 1000)
  
    


    const fetchData = async () => {
      const url =
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
      const parameters = {
        start: "1",
        limit: "30",
        convert: "USD",
      };
      const queryString = new URLSearchParams(parameters).toString();

      const headers = {
        Accepts: "application/json",
        "X-CMC_PRO_API_KEY": "d1daa58d-d3af-4113-8b31-39b3e5c62ebf",
      };

      try {
        const response = await fetch(`${url}?${queryString}`, {
          method: "GET",
          headers: headers,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setCoinData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=".container  row p-3">
        <div className="header col-sm-6 col-lg-1">Symbol</div>
        <div className="header col-sm-6 col-lg-1">Name</div>
        <div className="header col-sm-6 col-lg-2">Price</div>
        <div className="header col-sm-6 col-lg-2">24h</div>
        <div className="header col-sm-6 col-lg-2">7d</div>
        <div className="header col-sm-6 col-lg-2">30d</div>
        <div className="header col-sm-6 col-lg-2">last updated</div>
      </div>
      <div class="loading">
  <div align="center" >Loading...
  </div>
</div>

<div class="content">
 
</div>
      {coinData?.data?.map((x) => {
        return (
          // sksa 
          <div className=".container p-3">
            <div className=".container fullblock p-3 my-2">
              <div className="row">
                <div className="bor col-sm-6 col-lg-1">
                  <div className="symbol p-2">{x.symbol}</div>
                </div>
                <div className=" bor col-sm-6 col-lg-1">
                  <div className="p-2">{x.name}</div>
                </div>
                <div className="bor col-sm-6 col-lg-2">
                  <div className="p-2">Price:{x.quote.USD.price}</div>
                </div>
                <div className=" bor col-sm-6 col-lg-2">
                  <div
                    className={`${
                      x.quote.USD.percent_change_24h < 0
                        ? "negetive"
                        : "positive"
                    }`}
                  >
                    {x.quote.USD.percent_change_24h}
                  </div>
                </div>
                <div className="bor col-sm-6 col-lg-2">
                  <div className={`${
                      x.quote.USD.percent_change_24h < 0
                        ? "negetive"
                        : "positive"
                    }`}>{x.quote.USD.percent_change_7d}</div>
                </div>
                <div className=" bor col-sm-6 col-lg-2">
                  <div className={`${
                      x.quote.USD.percent_change_24h < 0
                        ? "negetive"
                        : "positive"
                    }`}>{x.quote.USD.percent_change_30d}</div>
                </div>
                <div className=" bor col-sm-6 col-lg-2">
                  <div className="date p-2">{x.last_updated}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default List;

// {/* <div className="detiles d-flex">
// <div className="logoin_chart mx-3"> {x.symbol} </div>
// <div className="p-2">
//   <div className="title "> {x.name}</div>
//   {/* {x.name} */}
// <div className="logoin_chart mx-3"> {x.quote.USSDpercent_change_60d} </div>
// <div className="">Price</div>
// </div>
// </div> */}

// <div className="bor col-1">
// <div className="p-2">{x.symbol}</div>
// </div>
// <div className=" col-1">
// <div className="p-2">{x.name}</div>
// </div>
// <div className=" col-2">
// <div className="p-2">Price:{x.quote.USD.price }</div>
// </div>
// <div className=" col-2">
// <div className="p-2">{x.quote.USD.percent_change_24h }</div>
// </div>
// <div className=" col-2">
// <div className="p-2">{x.quote.USD.percent_change_7d }</div>
// </div>
// <div className=" col-2">
// <div className="p-2">{x.quote.USD.percent_change_30d }</div>
// </div>
// <div className=" col-2">
// <div className="p-2">{x.last_updated }</div>
// </div>

// {/* <table class="table">

// <tbody>
// <tr className="col">
//   <th scope="row">{x.symbol}</th>
//   <th scope="">{x.name}</th>
//   <th scope="">Price:{x.quote.USD.price }</th>
//   <th scope="">{x.quote.USD.percent_change_24h }</th>
//   <th scope="">{x.quote.USD.percent_change_7d }</th>
//   <th scope="">{x.quote.USSDpercent_change_30d}</th>
//   <th scope="">{x.last_updated }</th>
// </tr>
// </tbody>
// </table> */}
