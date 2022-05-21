import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const items = [
    { name: "Home", to: "/" },
    { name: "New Comment ", to: "/new-comment" },
  ];

  return (
    <div>
      <nav>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "",
                    background: isActive ? "#7600dc" : "",
                  })}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
