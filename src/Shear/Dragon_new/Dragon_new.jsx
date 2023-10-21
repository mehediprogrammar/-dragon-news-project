import { Link } from "react-router-dom";

const Dragon_new = ({ news }) => {
  const {_id, title, thumbnail_url, details, rating } = news;
  return (
    <div className="my-10">
      <h2 className="text-2xl font-poppins font-semibold">{title}</h2>

      <div className="card card-compact  bg-base-100 ">
        <figure>
          <img className="w-[500px] h-[450px] my-6" src={thumbnail_url} />
        </figure>
        <div className="card-body my-3">
          {
               details.length > 200 ? <p className="">{details.slice(0,200)} <br />
               <Link to={`/news/${_id}`}><span className="  text-orange-500 ">Reade More.....</span> </Link>
               </p>:
               <p> {details}</p>
          }
       

          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Dragon_new;
