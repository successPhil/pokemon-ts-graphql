import NavBar from "./features/navigation/NavBar";
import Battle from "./routes/Battle";
import PokemonTypesList from "./routes/PokemonTypesList";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./routes/Home";
import { useState } from "react";
import MenuContainer from "./features/navigation/MenuContainer";
import Moves from "./routes/Moves";


//// For auth
import { useEffect } from "react";
import { User } from "firebase/auth";
import { auth, provider } from "./firebase/firebase";

import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";



function App() {
  const [showMobileMenu, setShowMobileMenu ] = useState(false)
  
  const toggleShowMenu = ()=> setShowMobileMenu(!showMobileMenu)


  //// for auth
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    console.log(token);
  };

  const handleLogout = async () => {
    await signOut(auth)

  }



  return (
    <>
    <Router>
    <NavBar toggleShowMenu={toggleShowMenu} />
    {showMobileMenu && <MenuContainer toggleShowMenu={toggleShowMenu}/>}
    <div>
      {user ? (
        <div>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Click this to LEAVE but you dont have to</button>
        </div>
      ) : (
        <>
        <p>No user logged in.</p>
        <button onClick={handleLogin}>Yooo Click Meee Click Meeeeeeeeee</button>
        </>
      )}
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/types" element={<PokemonTypesList/>} />
      <Route path="/moves" element={<Moves />} />
      <Route path="/battle" element={<Battle />} />
  
    </Routes>
    </Router>

    </>
  );
}

export default App;
