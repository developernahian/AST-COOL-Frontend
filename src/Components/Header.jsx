import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-11/12 mx-auto">






      <div className="navbar bg-base-100 shadow-sm">



        <div className="navbar-start">

          <img src="./src/assets/logo/AST-COOL-LOGO.png" className="w-52" alt="logo" />
        </div>



        <div className="navbar-center">
          <label className="input lg:w-96">
            <svg className="h-[1em] opacity-50 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
            <input type="search" className="grow" placeholder="Search" />

          </label>
          <button className="btn btn-primary">Primary</button>



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


        </div>



      </div>


 

      <div role="tablist" className="tabs tabs-border mt-10 flex justify-center">
        <a role="tab" className="tab hover:underline">AC SERVICE</a>
        <a role="tab" className="tab hover:underline">REFRIGERATOR SERVICE</a>
        <a role="tab" className="tab hover:underline">AST</a>
      </div>




    </div>
  );
};

export default Header;