import Header from "../../Component/Header/Header";
import NavBer from "../../Component/NavBer/NavBer";

import RightSideNavber from "../../Shear/RightSideNavber/RightSideNavber";


const New = () => {
    return (
        <div>
            <Header></Header>
  
            <NavBer></NavBer>
         
            <div className="grid md:grid-cols-4">
                <div className=" col-span-3 ">
            

                </div>
               <div className="col-span-1">
                  <RightSideNavber></RightSideNavber>
               </div>
            </div>
        </div>
    );
};

export default New;