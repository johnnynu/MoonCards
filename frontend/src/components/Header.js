import React from 'react'

const Header = () => {
  return (
    <header className="bg-base-300 text-white p-4 shadow-md">
      <nav className="navbar container mx-auto flex justify-between">
        <div className="flex-none px-2 mx-2">
          <span className="text-xl font-bold">MoonCards</span>
        </div>
        <div className="items-stretch hidden lg:flex">
          <a className="btn btn-ghost btn-md rounded-btn" href="#">
            Home
          </a>
          <a className="btn btn-ghost btn-md rounded-btn" href="#">
            About
          </a>
          <a className="btn btn-ghost btn-md rounded-btn" href="#">
            Contact
          </a>
          <a className="btn btn-ghost btn-md rounded-btn" href="#">
            Log in
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
