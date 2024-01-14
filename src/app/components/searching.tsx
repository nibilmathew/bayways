"use client"
import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Searching: React.FC = () => {
  const [intlFromValue, setIntlFromValue] = useState<string>('');
  const [intlToValue, setIntlToValue] = useState<string>('');
  const [intlOutboundValue, setIntlOutboundValue] = useState<string>('');
  const [intlReturnValue, setIntlReturnValue] = useState<string>('');

  const [domesticFromValue, setDomesticFromValue] = useState<string>('');
  const [domesticToValue, setDomesticToValue] = useState<string>('');
  const [domesticOutboundValue, setDomesticOutboundValue] = useState<string>('');
  const [domesticReturnValue, setDomesticReturnValue] = useState<string>('');

  const [findFlightOption, setFindFlightOption] = useState<'flightNumber' | 'fromTo'>('flightNumber');
  const [findFlightValue, setFindFlightValue] = useState<string>('');
  const [findFlightDepartureDate, setFindFlightDepartureDate] = useState<string>('');
  const [findFlightNumberValue, setFindFlightNumberValue] = useState<string>('');
  const [findFlightFromValue, setFindFlightFromValue] = useState<string>('');
  const [findFlightToValue, setFindFlightToValue] = useState<string>('');

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const value =
      findFlightOption === 'flightNumber'
        ? findFlightNumberValue
        : `${findFlightFromValue} - ${findFlightToValue}`;

    setResult(`Entered Value: ${value}`);
  };

  return (
    
      <div className="flex flex-col bg-[#f9f8f5] text-black w-[600px] h-[300px] rounded-[15px] pl-[23px] opacity-95">
        <Tabs>
          <TabList>
          <Tab> International</Tab>
          <Tab>Domestic</Tab>
          <Tab>Find Flight</Tab>
          </TabList>

          <TabPanel>
          <form onSubmit={handleSubmit}>
              <div className="flex flex-col pt-[20px]">
                <div className="flex text-[12px] pl-[7px]">
                  <label htmlFor="fromDomestic">Flying From</label>
                  <label className="ml-[200px]" htmlFor="toDomestic">Flying To</label>
                </div>
                <div className="flex">
                  {/* ... Input fields for international flights ... */}
                  <input
                    className='w-[260px] h-[41px] border-black border-[1px] rounded-[5px] focus:outline-none '
                    type="text"
                    id="inputValue"
                    value={intlFromValue}
                    onChange={(e) => setIntlFromValue(e.target.value)}
                    required
                  />
                  <input
                    className='ml-[10px] w-[260px] h-[41px] border-black border-[1px] rounded-[5px] focus:outline-none'
                    type="text"
                    id="inputValue"
                    value={intlToValue}
                    onChange={(e) => setIntlToValue(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mt-[15px]">
                <div className="text-[12px] pl-[7px]">
                  <label htmlFor="outboundDomestic">Outbound</label>
                  <label className="ml-[210px]" htmlFor="returnDomestic">Return</label>
                </div>
                <div className="flex">
                  {/* ... Input fields for international flights ... */}
                  <input
                    className='w-[260px] h-[41px] border-black border-[1px] rounded-[5px] focus:outline-none'
                    type="text"
                    id="inputValue"
                    value={intlOutboundValue}
                    onChange={(e) => setIntlOutboundValue(e.target.value)}
                    required
                  />
                  <input
                    className='ml-[10px] w-[260px] h-[41px] border-black border-[1px] rounded-[5px] focus:outline-none'
                    type="text"
                    id="inputValue"
                    value={intlReturnValue}
                    onChange={(e) => setIntlReturnValue(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex mt-[30px] mr-[37px] justify-center items-center">
                <div>
                  <a className="text-[17px] font-light text-blue-800 hover:underline decoration-inherit" href="">
                    Promo Code
                  </a>
                </div>

                <div className="flex ml-[30px]">
                  <input
                    type="checkbox"
                    id="checkboxDomestic"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className="w-[25px] h-[25px] mr-2"
                  />
                  <label htmlFor="checkboxDomestic" className="text-[14px] ">Pay with Miles</label>
                </div>

                <div className='text-white opacity-100'>
                  <button className=" w-[250px] h-[35px] ml-[25px] bg-gradient-to-r from-blue-950 to-sky-600 border-black border rounded hover:from-sky-600  hover:to-blue-950" type="submit">
                    Search Flights
                  </button>
                </div>
              </div>
            </form>
          </TabPanel>

          <TabPanel>
            <form onSubmit={handleSubmit}>
              <div className="pt-[20px]">
                <div className="flex text-[12px] pl-[7px]">
                  <label htmlFor="fromDomestic">Flying From</label>
                  <label className="ml-[200px]" htmlFor="toDomestic">Flying To</label>
                </div>
                <div className="flex">
                  {/* ... Input fields for Domestic flights ... */}
                  <input
                    className='w-[260px] h-[41px] border-black border-[1px] rounded-[5px] focus:none '
                    type="text"
                    id="inputValue"
                    value={domesticFromValue}
                    onChange={(e) => setDomesticFromValue(e.target.value)}
                    required
                  />
                  <input
                    className='ml-[10px] w-[260px] h-[41px] border-black border-[1px] rounded-[5px] focus:none'
                    type="text"
                    id="inputValue"
                    value={domesticToValue}
                    onChange={(e) => setDomesticToValue(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mt-[15px]">
                <div className="text-[12px] pl-[7px]">
                  <label htmlFor="outboundDomestic">Outbound</label>
                  <label className="ml-[210px]" htmlFor="returnDomestic">Return</label>
                </div>
                <div className="flex">
                  {/* ... Input fields for Domestic flights ... */}
                  <input
                    className='w-[260px] h-[41px] border-black border-[1px] rounded-[5px] focus:none'
                    type="text"
                    id="inputValue"
                    value={domesticOutboundValue}
                    onChange={(e) => setDomesticOutboundValue(e.target.value)}
                    required
                  />
                  <input
                    className='ml-[10px] w-[260px] h-[41px] border-black border-[1px] rounded-[5px] focus:none'
                    type="text"
                    id="inputValue"
                    value={domesticReturnValue}
                    onChange={(e) => setDomesticReturnValue(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex mt-[30px] mr-[37px] justify-center items-center">
                <div>
                  <a className="text-[17px] font-light text-blue-900 hover:underline decoration-inherit" href="">
                    Promo Code
                  </a>
                </div>

                <div className="flex ml-[30px]">
                  <input
                    type="checkbox"
                    id="checkboxDomestic"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className="w-[25px] h-[25px] mr-2"
                  />
                  <label htmlFor="checkboxDomestic" className="text-[14px] ">Pay with Miles</label>
                </div>

                <div className='text-white opacity-100'>
                  <button className=" w-[250px] h-[35px] ml-[25px] bg-gradient-to-r from-blue-950 to-sky-600 border-black border rounded hover:from-sky-600  hover:to-blue-950"
                   type="submit">
                    Search Flights
                  </button>
                </div>
              </div>
            </form>
          </TabPanel>
          
          <TabPanel>
          <form onSubmit={handleSubmit}>
            <div className="flex mt-[15px]">
              <label>
                <input
                  type="radio"
                  value="flightNumber"
                  checked={findFlightOption === 'flightNumber'}
                  onChange={() => setFindFlightOption('flightNumber')}
                />
                Flight Number
              </label>
              <label className="ml-[20px]">
                <input
                  type="radio"
                  value="fromTo"
                  checked={findFlightOption === 'fromTo'}
                  onChange={() => setFindFlightOption('fromTo')}
                />
                Origin/Destination
              </label>
            </div>
            <div className="pt-[20px]">
              <div className="flex">
                {/* ... Input fields for Origin/Destination or Flight Number ... */}
                {findFlightOption === 'fromTo' ? (
                  <React.Fragment>
                    <input
                      className='w-[260px] h-[41px] pl-[10px] border-black border-[1px] rounded-[5px] focus:none '
                      type="text"
                      placeholder="From*"
                      value={findFlightFromValue}
                      onChange={(e) => setFindFlightFromValue(e.target.value)}
                      required
                    />
                    <input
                      className='w-[260px] h-[41px] ml-[15px] pl-[10px] border-black border-[1px] rounded-[5px] focus:none '
                      type="text"
                      placeholder="To*"
                      value={findFlightToValue}
                      onChange={(e) => setFindFlightToValue(e.target.value)}
                      required
                    />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <input
                      className='w-[260px] h-[41px] pl-[10px] border-black border-[1px] rounded-[5px] focus:none '
                      type="text"
                      placeholder="Flight Number*"
                      value={findFlightNumberValue}
                      onChange={(e) => setFindFlightNumberValue(e.target.value)}
                      required
                    />
                  </React.Fragment>
                )}
              </div>
            </div>

            <div className="mt-[15px]">
              <div className="text-[12px] pl-[7px]">
                <label htmlFor="departureDate">Departure Date</label>
              </div>
              <div className="flex">
                {/* ... Input fields for Departure date ... */}
                <input
                  className='w-[260px] h-[41px] border-black pl-[10px] border-[1px] rounded-[5px] focus:none'
                  type="text"
                  value={findFlightDepartureDate}
                  onChange={(e) => setFindFlightDepartureDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex mt-[30px] justify-start">
              <div className='text-white opacity-100'>
                <button className=" w-[65px] h-[40px] p-2 bg-gradient-to-r from-blue-950 to-sky-600 border-black border rounded hover:from-sky-600  hover:to-blue-950"
                  type="submit">
                  Find
                </button>
              </div>
            </div>
          </form>
        </TabPanel>
        </Tabs>

        {result && <div>{result}</div>}
      </div>
    
  );
};

export default Searching;





