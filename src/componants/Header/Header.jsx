import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between">
            <div className="font-bold">
                <h2> Donation Campaign</h2>
            </div>
            <nav>
                <ul>
                    <NavLink
                        to="/messages"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Messages
                    </NavLink>;
                </ul>
            </nav>
        </div>
    );
};

export default Header;