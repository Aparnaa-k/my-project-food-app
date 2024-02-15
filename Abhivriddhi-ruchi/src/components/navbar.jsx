import React from 'react'

const navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6">
      <div>
        <h3 className="text-xl font-bold text-black-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-1xl font-medium">
          Welcome to <b className='font-bold'>Abhivriddhi Ruchi</b>
        </h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="search here"
          autoComplete="off"
          className="p-1.5 border-2 border-black-900 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
}

export default navbar