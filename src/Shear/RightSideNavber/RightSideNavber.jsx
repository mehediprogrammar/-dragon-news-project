import { FaFacebook, FaGithub, FaGoogle, FaTwitter, FaWhatsapp } from 'react-icons/fa';


const RightSideNavber = () => {
  return (
    <div>
     

      <div className="px-5 py-4">
      <h1 className="text-2xl font-bold ">Login with</h1>
        <button className="btn btn-outline my-4 w-full">
       <FaGoogle></FaGoogle>
          Login with Google 
        </button>
        <button className="btn btn-outline my-4 w-full">
         <FaGithub></FaGithub>
          Login with Github 
        </button>
      </div>

      <div className="px-5 py-4">
      <h1 className="text-2xl font-bold ">Find Us On</h1>
        <button className="btn btn-outline my-4 w-full">
          <FaFacebook className=' text-blue-800 text-2xl '></FaFacebook>
          Facebook
        </button>
        <button className="btn btn-outline my-4 w-full">
         <FaTwitter className=' text-blue-800 text-2xl '></FaTwitter>
          Twitter
        </button>
        <button className="btn btn-outline my-4 w-full">
        <FaWhatsapp className=' text-blue-800 text-2xl '></FaWhatsapp>
          Whatsapp
        </button>
    
      </div>

      
      <div className='px-5 py-4 bg-slate-200'>
      <h1 className="text-2xl font-bold ">Q-Zone</h1>
       
       <img className='mt-10 h-full' src="../../../public/All_img_logo/qZone1.png" alt="" />
       <img className='mt-10 h-full' src="../../../public/All_img_logo/qZone2.png" alt="" />
       <img className='mt-10 h-full' src="../../../public/All_img_logo/qZone3.png" alt="" />


          <div className='mt-6'>
          <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/VQXgxVx/bg1.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-sm">
      <h1 className="mb-5 text-2xl font-bold">Create an Amazing NewspaperHello there</h1>
      <p className="mb-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
      <button className="btn btn-secondary ">Learn More</button>
    </div>
  </div>
</div>
          </div>

      </div>

    </div>
  );
};

export default RightSideNavber;
