import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="lg:flex  mx-auto justify-center items-center lg:justify-between py-4 px-1 container lg:space-y-0 space-y-10">
            <div>
                <img className="lg:w-40  w-auto justify-center mx-auto" src="https://i.ibb.co/S3RjXzK/Logo.png" alt="" />
            </div>
            <nav>
                <ul className="gap-6 flex text-sm justify-center mx-auto text-center">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>
            
          
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
              
              
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                
                </ul>
            </nav>
        </div>
    );
};

export default Header;