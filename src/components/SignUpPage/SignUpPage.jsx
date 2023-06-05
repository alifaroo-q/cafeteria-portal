import aside from "../../assets/aside.jpg";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";

const SignUpPage = () => {
  return (
    <div className="w-screen h-screen gray-gradient py-20">
      <div className="grid grid-cols-2 h-full bg-white w-4/5 mx-auto place-items-center shadow-xl rounded-md">
        <div className="h-full w-full">
          <div className="flex flex-col h-full w-full items-center justify-center">
            <img src={logo} alt="cafeteria logo" />
            <div className="flex flex-col gap-5 w-full items-center mt-10">
              <input
                className="transition-all hover:shadow-xl p-2 rounded-lg w-1/3 bg-gray-200 shadow-lg drop-shadow-lg indent-2"
                type="text"
                name="name"
                id=""
                placeholder="name"
              />
              <input
                className="transition-all hover:shadow-xl p-2 rounded-lg w-1/3 bg-gray-200 shadow-lg drop-shadow-lg indent-2"
                type="email"
                name="email"
                id=""
                placeholder="email"
              />
              <input
                className="transition-all hover:shadow-xl p-2 rounded-lg w-1/3 bg-gray-200 shadow-lg drop-shadow-lg indent-2"
                type="password"
                name="password"
                id=""
                placeholder="password"
              />
              <button className="bg-amber-600 py-2 px-20 shadow-lg drop-shadow-lg text-white text-lg font-bold rounded-lg hover:bg-amber-700 transition-all mt-3">
                sign up
              </button>
              <div className="text-gray-400 font-semibold">
                already have an account?{" "}
                <Link to={"/login"}>
                  <span className="text-amber-700 font-bold">login here</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden rounded-r-md ">
          <img
            className="h-full w-full object-cover object-bottom"
            src={aside}
            alt="cafeteria dinning area"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
