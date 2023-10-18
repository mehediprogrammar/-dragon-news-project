import { Link } from "react-router-dom";


const NavBer = () => {
  const navLink = <>
         <li><Link to="/">Home</Link></li>
         <li><Link>About</Link></li>
         <li><Link>Career</Link></li>

  </>

    return (
        <div>
            <div className="navbar bg-base-100 mt-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLink}
      </ul>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLink}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <img className="h-10" src="../../../public/All_img_logo/user.png" alt="" />
    <a className="btn bg-[#403F3F]  text-white">Login</a>
  </div>
</div>
        </div>
    );
};

export default NavBer;