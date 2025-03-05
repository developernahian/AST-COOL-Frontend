import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-11/12 mx-auto">






      <div className="navbar bg-base-100 shadow-sm">



        <div className="navbar-start">
          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div> */}
          <img src="./src/assets/logo/AST-COOL-LOGO.png" className="w-52" alt="logo" />
        </div>



        <div className="navbar-center">
          <label className="input lg:w-96">
            <svg className="h-[1em] opacity-50 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
            <input type="search" className="grow" placeholder="Search" />
            {/* <kbd className="kbd kbd-sm">⌘</kbd>
            <kbd className="kbd kbd-sm">K</kbd> */}
          </label>
          <button className="btn btn-primary">Primary</button>


          {/* <div className=''>
            <input type="text" placeholder='Enter your email' className='text-tertary text-sm md:text-base border-2 border-gray-300 rounded-xl w-36 md:w-96 h-11 md:h-14 pl-3 md:pl-7' />
            <button className='bg-white_primary text-sm md:text-base text-[#040D11]  bg-gradient-to-r from-[#dcc192] via-[#f7cb73] to-[#e37993]  rounded-xl h-11 md:h-14 px-2 md:px-6 ml-2 md:ml-4 font-bold'>Subscribe</button>
          </div> */}

        </div>



        <div className="navbar-end gap-8">

          <div className="flex flex-row gap-2 justify-center items-center">
            <FaRegUser size={40} />
            <div className="flex flex-col justify-center items-center">
              <p>Register</p>
              <p>Account</p>
            </div>
          </div>

          <FaRegHeart size={40} />
          <BsCart size={40} />

          {/* <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button> */}

        </div>



      </div>


      {/* <div className="flex flex-row gap-4 justify-center items-center mt-10">
        <a href="#">AC SERVICE</a>
        <a href="#">REFRIGERATOR SERVICE</a>
        <a href="#">AST</a>
      </div> */}

      <div role="tablist" className="tabs tabs-border mt-10 flex justify-center">
        <a role="tab" className="tab hover:underline">AC SERVICE</a>
        <a role="tab" className="tab hover:underline">REFRIGERATOR SERVICE</a>
        <a role="tab" className="tab hover:underline">AST</a>
      </div>





      














    </div>
  );
};

export default Header;