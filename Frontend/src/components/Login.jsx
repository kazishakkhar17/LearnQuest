/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider'; // add this

function Login() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth(); // add this

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      Email: data.email,
      Password: data.password
    };

    try {
      const res = await axios.post("http://localhost:4000/user/login", userInfo);

      if (res.data && res.data.user) {
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user); // set user immediately
        toast.success("Login successful!");
        document.getElementById("my_modal_3")?.close();

        if (res.data.user.role === "admin") {
          navigate("/AdminExamBoard");
        } else {
          navigate("/");
        }
      } else {
        toast.error("Invalid login response!");
      }

    } catch (err) {
      console.error(err);
      toast.error("Login failed! Please try again.");
    }
  };


  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-6">
              <button className="bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
