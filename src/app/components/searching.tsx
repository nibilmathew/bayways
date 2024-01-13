"use client"
import React, { useState,useEffect } from 'react';

const Searching: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);
    const [isChecked, setIsChecked] = useState<boolean>(false);
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setResult(`Entered Value: ${inputValue}`);
    };

  return (
    <div>
      <div className="flex flex-col bg-[#f9f8f5] text-black w-[600px] h-[300px] rounded-[15px] pl-[23px] opacity-75 " >
        <div className="font-semibold pl-[50px]">International</div>
        <form onSubmit={handleSubmit}>
          <div className="pt-[50px]">
            <div className="flex text-[12px] pl-[7px]">
              <label htmlFor="inputValue">Flying From</label>
              <label className="ml-[200px]" htmlFor="inputValue">Flying To</label>
            </div>
            <div className="flex ">
              <input
                className='w-[260px] h-[41px] border-black border-[1px] rounded-[5px] focus:none '
                type="text"
                id="inputValue"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
              <input
                className='ml-[10px] w-[260px] h-[41px] border-black border-[1px] rounded-[5px] focus:none'
                type="text"
                id="inputValue"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mt-[15px]">
            <div className="text-[12px] pl-[7px]">
              <label htmlFor="inputValue">Outbound</label>
              <label className="ml-[210px]" htmlFor="inputValue">Return</label>
            </div>
            <div className="flex ">
              <input
                className='w-[260px] h-[41px] border-black border-[1px] rounded-[5px] focus:none'
                type="text"
                id="inputValue"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
              <input
                className='ml-[10px] w-[260px] h-[41px] border-black border-[1px] rounded-[5px] focus:none'
                type="text"
                id="inputValue"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex mt-[30px]">
         
            <div>
              <a className="text-[17px] font-light text-blue-800 hover:underline decoration-inherit" href="">Promo Code</a>
            </div> 

            <div className="flex ml-[30px]">
              <input
                type="checkbox"
                id="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="w-[25px] h-[25px] mr-2"
              />
              <label htmlFor="checkbox" className="text-[14px]">Pay with Miles</label>
            </div> 

            <div className='text-white opacity-100'>
              <button className=" w-[250px] h-[35px] ml-[25px] bg-blue-500 border-black border rounded " type="submit">Search Flights</button>
            </div>

        </div>
        </form>

        {result && <div>{result}</div>}
        
         
      </div>
    </div>
  )
}

export default Searching