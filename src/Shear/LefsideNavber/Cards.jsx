const Cards = ({ card }) => {
  const { id, img, category, title, date_of_bar } = card;

  return (
    <div>
      <div className="card max-w-screen-sm mt-10  bg-base-100 ">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body font-poppins ">
       
          <p className="text-xl font-semibold">{category}</p>
          <div className="card-actions font-poppins  justify-between ">
            <div className=" font-sm">{title}</div>
            <div className=" font-sm ">{date_of_bar}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
