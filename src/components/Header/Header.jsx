/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo222.png";
import { NavLink, Link } from "react-router-dom";
import image1 from "../../assets/images/doudi2.jpg";
import { useNavigate } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Accueil",
  },

  {
    path: "/fournisseurs",
    display: "Trouver un founisseur",
  },

  // {
  //   path:'/services',
  //   display:'Services'
  // },

  {
    path: "/contact",
    display: "Contactez-nous",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [user, setUser] = useState();
  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      setUser(
        localStorage.getItem("role") === "pharmacien"
          ? JSON.parse(userDataString).user
          : JSON.parse(userDataString)
      );
    } else {
      setUser(null);
    }
  }, []);

  return (
    <header className="header flex items-center sticky__header" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/*=========logo========= */}
          <div className="lg:w-1/2 xl:w-1/3">
            <img
              src={logo}
              alt="Logo"
              className="w-24 md:w-35 lg:w-64 xl:w-70 h-auto"
            />
          </div>

          {/*=========menu=========== */}

          <div className="navigation" ref={menuRef}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-blueColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/*======= nav right ========== */}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] rounded-full cursor-pointer">
                  <img src={image1} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>
            {user ? (
              <div className="flex items-center gap-8">
                {localStorage.getItem("role") !== "pharmacien" && (
                  <img
                    className="h-8 w-8 cursor-pointer"
                    src="public/assets/icons/profile.svg"
                    alt=""
                    onClick={() => {
                      console.log(user);
                      navigate(
                        `/${
                          localStorage.getItem("role") === "pharmacien"
                            ? "users"
                            : "fournisseurs"
                        }/` + user._id
                      );
                    }}
                  />
                )}
                {localStorage.getItem("role") === "pharmacien" && (
                  <img
                    className="h-8 w-8 cursor-pointer"
                    src="public/assets/icons/cart.svg"
                    alt=""
                    onClick={() => {
                      navigate("/cart");
                    }}
                  />
                )}
                <img
                  className="h-8 w-8 cursor-pointer"
                  src="public/assets/icons/logout.svg"
                  alt=""
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/home");
                    window.location.reload();
                  }}
                />
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  S'identifier
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
