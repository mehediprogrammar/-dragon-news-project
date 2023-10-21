import { useEffect, useState } from "react";
import Cards from "./Cards";


const LefSideCard = () => {

    const [categoryCards, setCategoryCard] = useState([]);

    useEffect(()=>{
       fetch("categories_card.json")
       .then(ref => ref.json())
       .then(data => setCategoryCard(data))

    },[])


    return (
        <div>
             {
                categoryCards.map(card => <Cards key={card.id} card={card} ></Cards>)
             }
        </div>
    );
};

export default LefSideCard;
