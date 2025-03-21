import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          Order your <br /> favorite food here
        </h2>
        <p>
          choose from a diverse menu featuring a delicatable array of dishes
          crafted with the finest ingredients and culinary expertise. our
          mission is to satisfy your carvings and elevate your dining experince,
          one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
