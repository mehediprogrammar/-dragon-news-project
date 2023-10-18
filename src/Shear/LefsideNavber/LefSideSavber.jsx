import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const LefSideSavber = () => {

    const [categories, setCategories] = useState([])

     useEffect (() =>{
        fetch('categories.json')
        .then(ref => ref.json())
        .then(data => setCategories(data))
     },[])


    return (
        <div className=" space-y-6 ">
            <h1 className="text-2xl font-bold"> All Categories</h1>

            {
                categories.map(category =>  
                <Link  className=" block ml-4 text-xl font-semibold "
                    key={category.id}>
                   {category.name}</Link> )
            }
        </div>
    );
};

export default LefSideSavber;