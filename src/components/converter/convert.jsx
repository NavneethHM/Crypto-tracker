import './convert.scss';
import { useEffect, useState } from "react";


function Convertion (){


    const [coinDataConvert, setCoinDataConvert] = useState([]);
    console.log(coinDataConvert);
    useEffect(() => {
      const fetchData = async () => {
        const url =
          "https://coinmarketcap.com/converter";
        const parameters = {
          start: "1",
          limit: "10",
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
          setCoinDataConvert(result);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  



    return (
        <>
        <div>
<div className='text text-center px-5'>
Cryptocurrency Converter Calculator
</div>
<div className='helo'>
   
<div className='incard p-5 m-5'>
   
    <div className=' p-3'>
        <label htmlFor="" className='from'>From</label><br /><br />
        <input type="text" placeholder='0' />
    </div>
    <div className=' p-2'>
        <label htmlFor="" className='to'>To</label><br /><br />
        <input type="text" placeholder='0' />
    </div>
    <div className='p-5'>
        <button className='convertbutton'>Convert</button>
    </div>
</div>

</div>

        </div>
        </>
    );
}
export default Convertion;