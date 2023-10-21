import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BrekingNew = () => {
  return (
    <div className="flex font-poppins mt-10">
      <button className="btn btn-active  btn-secondary text-white">Latest</button>

      <Marquee className="  " pauseOnHover={true}>
         <Link className="mr-6 text-xl font-semibold  " to="/">   I can be a React component, multiple React components, or just some
        text.</Link>
         <Link className="mr-6 text-xl font-semibold " to="/">   I can be a React component, multiple React components, or just some
        text.</Link>
         <Link className="mr-6 text-xl font-semibold " to="/">   I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
    </div>
  );
};

export default BrekingNew;
