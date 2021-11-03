import React from "react";
import MyAdss from "../sections/MyProfil/MyAdss";
import Navbar from "../sections/MyProfil/Navbar";
import Contact from "../parts/contact"

function MyProfil() {
  const auth = localStorage.getItem("token");
  
  return auth ? (
    <div>
      <Navbar />
      <MyAdss />
    </div>
  ):(
    <div>
      <Contact />
    </div>
  )
}

export default MyProfil;
