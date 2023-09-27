import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";


const NavBar = () => {
    return (
        <div >
            <div className="flex-col ml-8 md:ml-0  lg:flex-row md:flex-row md:flex lg:flex items-center  md:justify-between lg:justify-between mt-5">

                <Logo></Logo>
                <ul className=" flex gap-5 md:gap-8 lg:gap-8 text-lg font-bold mt-8 md:mt-0 md:ml-0">
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