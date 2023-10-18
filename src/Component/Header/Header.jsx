import moment from 'moment';
import logo from "../../../public/All_img_logo/logo.png";

const Header = () => {
    return (
        <div className='text-center mt-6'>
             <img className=' m-auto ' src={logo} alt="" />
             <p className='text-xl mt-3 font-poppins'>Journalism Without Fear or Favour</p>
             <p className='text-xl mt-3 font-poppins'>{moment().format("dddd, MMMM D YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;

