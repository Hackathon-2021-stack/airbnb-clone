import Image from "next/image";
const Airbnb_Logo = require("../images/Airbnb_Logo.png");
import { SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon } from "@heroicons/react/solid";
import { useState } from "react";
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {DateRangePicker} from 'react-date-range'

const Header = () => {
  const [SearchInput,setSearchInput] = useState('')
  const [StartDate,setStartDate] = useState(new Date())
  const [EndDate,setEndDate] = useState(new Date())
  const [numberOfGuests,setNumberOfGuests] = useState(1)
  
  const handleSelect = (ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  
  const selectionRange = {
    startDate:StartDate,
    endDate:EndDate,
    key:"selection",
  }
  
  const resetInput = ()=>{
    setSearchInput('')
  }

  
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src={Airbnb_Logo}
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle -Search */}
      <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm">
        <input
          value={SearchInput}
          onChange={(e)=>setSearchInput(e.target.value)}
          type="text"
          placeholder="Start your Search"
          className="flex-grow pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none"
        />
        <SearchIcon className="hidden h-8 p-2 text-white transition transform bg-red-400 rounded-full cursor-pointer md:mx-2 md:inline-flex decoration-150 active:scale-90 " />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
          <p className="hidden md:inline">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer"/>
          <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
              <MenuIcon className="h-6"/>
              <UserCircleIcon className="h-6 "/>
          </div>
      </div>
      
      {SearchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={['#FD5B61']}
          onChange={handleSelect}
          />
          <div className="flex items-center mb-4 border-b">
            <h2 className="flex-grow text-2xl font-semibold">Number of Guests</h2>
            <UsersIcon className="h-5"/>
            <input type="number" value={numberOfGuests} onChange={(e)=>{setNumberOfGuests(e.target.value)}} min={1} className="w-12 pl-2 text-lg text-red-400 outline-none"/>
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
      
    </header>
  );
};

export default Header;
