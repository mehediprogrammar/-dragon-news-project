
import { useContext } from "react";
import { Link } from "react-router-dom";
import NavBer from "../../Component/NavBer/NavBer";
import { AuthContext } from "../../Provider/AuthProvider";




const Register = () => {
  const {createUser} = useContext(AuthContext)
  
    const handleRegister = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const from = new FormData(e.currentTarget)
       
        const name = from.get('name')
        const photo = from.get("photo")
        const email = from.get('email')
        const password = from.get('password')

        console.log(name, photo, email, password);
        
        // create user
       
        createUser(email, password) 
        .then(result =>{
         console.log(result.user)
        })
        .catch(error =>{
         console.log(error)
        })  

      }


    return (
        <div>
      <div>
     <NavBer></NavBer>
     </div>

      <div className="  ">
      <h1 className="tex-3xl font-semibold text-center mt-6">Register your account</h1>

        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto mt-10">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="photo "
              name="photo"
              placeholder="photo"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn text-white bg-[#403F3F]">Register</button>
          </div>
        </form>
         <p className="text-center text-xl font-normal mt-6">All Ready Have a Acount  ? please: <Link to="/login"><span className="text-secondary">login</span> </Link> </p>
      </div>
        </div>
    );
};

export default Register;
