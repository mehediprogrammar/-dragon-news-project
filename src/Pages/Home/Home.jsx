import { useLoaderData } from "react-router-dom";
import BrekingNew from "../../Component/BrekingNew/BrekingNew";
import Header from "../../Component/Header/Header";
import NavBer from "../../Component/NavBer/NavBer";
import Dragon_new from "../../Shear/Dragon_new/Dragon_new";
import LefSideSavber from "../../Shear/LefsideNavber/LefSideSavber";
import RightSideNavber from "../../Shear/RightSideNavber/RightSideNavber";


const Home = () => {
 
    const news = useLoaderData()
    console.log(news)

    return (
        <div className="my-6">
            <Header></Header>
            <BrekingNew></BrekingNew>
            <NavBer></NavBer>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-24 gap-6" >

                <div className="">
                    <LefSideSavber></LefSideSavber>
                </div>
                <div className="md:col-span-2  ">
                      {
                        news.map(aNews => <Dragon_new
                             key={aNews._id}
                               news={aNews}

                        ></Dragon_new>)
                      }
                </div>
                <div className="">
                    <RightSideNavber></RightSideNavber>
                </div>
            </div>
          
        </div>
    );
};

export default Home;