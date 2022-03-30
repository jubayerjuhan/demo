import React from "react";
import logo from "../../assets/navlogo.svg";
import discord from "../../assets/discord.svg";
import twitter from "../../assets/twitter.svg";
import profileIcon from "../../assets/profileIcon.svg";
import cart from "../../assets/cart.svg";
import "./navbar.scss";

const Navbar = () => {
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "Explorer", path: "/explorer" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "About Us", path: "/about-us" },
    { name: "Stake Pool", path: "/stake-pool" },
    { name: "White Paper", path: "/whitepaper" },
  ];
  const logos = [
    { name: "discord", path: "https://discord.gg/fjQXxQW", img: discord },
    {
      name: "twitter",
      path: "https://twitter.com/Crypto_Currency",
      img: twitter,
    },
    { name: "cart", path: "https://twitter.com/Crypto_Currency", img: cart },
  ];
  return (
    <nav className="navbar horizontalPadding navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar__logo">
        <img src={logo} alt="Universe25 Logo" />
      </div>
      <div className="navbar__links">
        {navlinks.map((link) => (
          <div className="link" key={link.path}>
            <p>{link.name}</p>
          </div>
        ))}
        {logos.map((logo) => (
          <div className="link" key={logo.path}>
            <img src={logo.img} alt="" srcset="" className="socialLogo" />
          </div>
        ))}
        <div className="link loginButton">
          <img src={profileIcon} alt="" />
          <p>Login</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
