import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";


const NavBar = () => {
    return (
        <div >
            <div className="flex-col lg:flex-row md:flex-row md:flex lg:flex items-center  md:justify-between lg:justify-between mt-5">

                <Logo></Logo>
                <ul className=" flex gap-8 text-lg font-bold">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>


        </div>
    );
};

export default NavBar;