import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="max-w-[1200px] mx-auto " >
       
            <Outlet></Outlet>
        </div>
    );
};

export default Main;