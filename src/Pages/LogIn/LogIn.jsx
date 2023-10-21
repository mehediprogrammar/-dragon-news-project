import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBer from "../../Component/NavBer/NavBer";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIn = () => {
  
  const {sinIn} = useContext(AuthContext)

const location = useLocation()
const navigate = useNavigate()
console.log(location)

    const handleLogin = e => {
        e.preventDefault()
        const from = new FormData(e.currentTarget)
         const email = from.get('email')
         const password = from.get('password')
        console.log(email, password);
    
        sinIn(email, password)
        .then(result =>{
          console.log(result.user)
          //navigate 
          navigate(location?.state ? location.state : '/')

         })
         
         .catch(error =>{
          console.log(error)
         }) 

    }


  return (
    <div >
    
     <div>
     <NavBer></NavBer>
     </div>

      <div>
      <h1 className="tex-3xl font-semibold text-center mt-6">Login your account</h1>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto mt-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white bg-[#403F3F]">Login</button>
          </div>
        </form>
         <p className="text-center text-xl font-normal mt-6"> Don't  Have An Count  ? please: <Link to="/register"><span className="text-secondary">Register</span> </Link> </p>
      </div>
    </div>
  );
};

export default LogIn;
