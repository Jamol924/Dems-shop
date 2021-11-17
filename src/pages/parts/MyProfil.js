import React from "react";
import MyAdss from "../sections/MyProfil/MyAdss";
import Navbar from "../sections/MyProfil/Navbar";
import Contact from "../parts/contact"
import MinNav from "../../components/common/MineNavbar/MinNav";

function MyProfil() {
  const auth = localStorage.getItem("token");
  
  return auth ? (
    <div>
      <Navbar />
      <MinNav />
      <MyAdss />
      
    </div>
  ):(
    <div>
      <Contact />
    </div>
  )
}

export default MyProfil;
