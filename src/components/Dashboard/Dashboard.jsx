import "../Dashboard/Dashboard.css";
import logo from "../../assets/Logo.svg";

import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuClipboardList, LuLogOut } from "react-icons/lu";

const Dashboard = () => {
  return (
    <main className="brown-gradient h-screen w-screen py-20">
      <section className="h-full bg-white w-4/5 mx-auto shadow-xl rounded-md grid grid-cols-12">
        <article className="col-span-2">
          <div className="flex flex-col items-center place-content-between  h-full">
            <img className="mt-10 w-4/6" src={logo} alt="cafeteria logo" />
            <div className="h-full mt-8 lg:mt-16">
              <div className="flex gap-1 py-3">
                <CgProfile size={25} /> Profile
              </div>
              <div className="flex gap-1 py-3">
                <AiOutlineShoppingCart size={25} /> Cart
              </div>
              <div className="flex gap-1 py-3">
                <LuClipboardList size={25} /> Orders
              </div>
            </div>
            <div className="flex gap-1 mb-8">
              <LuLogOut size={30} /> Logout
            </div>
          </div>
        </article>
        <article className="bg-blue-600 col-span-10">Main content</article>
      </section>
    </main>
  );
};

export default Dashboard;
