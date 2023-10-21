import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="max-w-[1200px] mx-auto bg-white " >
    
            <Outlet></Outlet>
        </div>
    );
};

export default Main;