import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex items-center justify-around lg:justify-between py-4 px-1">
            <div className="">
                <img className="lg:w-40 w-auto h-auto " src="https://i.ibb.co/S3RjXzK/Logo.png" alt="" />
            </div>
            <nav>
                <ul className="gap-5 flex">
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
            </nav>
        </div>
    );
};

export default Header;