import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BrekingNew = () => {
  return (
    <div className="flex">
      <button className="btn btn-active btn-neutral text-white">Latest</button>

      <Marquee pauseOnHover={true}>
         <Link className="mr-6" to="/">   I can be a React component, multiple React components, or just some
        text.</Link>
         <Link className="mr-6" to="/">   I can be a React component, multiple React components, or just some
        text.</Link>
         <Link className="mr-6" to="/">   I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
    </div>
  );
};

export default BrekingNew;
