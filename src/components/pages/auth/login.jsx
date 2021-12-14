import { Cancel, Room } from "@material-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
import "../auth/login.css";

export default function Login({ setShowLogin, setCurrentUsu_Nombre,myStorage }) {
  const [error, setError] = useState(false);
  const Usu_NombreRef = useRef();
  const usu_contrasenaRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const usuario = {
      usu_nombre: Usu_NombreRef.current.value,
      usu_contrasena: usu_contrasenaRef.current.value,
    };
    try {
      const res = await axios.post("http://localhost:3800/api/usuario/login", usuario);
      setCurrentUsu_Nombre(res.data.usu_nombre);
      myStorage.setItem('usuario', res.data.usu_nombre);
      setShowLogin(false)
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="loginContainer">
      <div className="logo">
        <Room className="logoIcon" />
        <span>B I E N V E N I D O</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input autoFocus placeholder="Usu_Nombre" ref={Usu_NombreRef} />
        <input
          type="password"
          min="6"
          placeholder="usu_contrasena"
          ref={usu_contrasenaRef}
        />
        <button className="loginBtn" type="submit">
          Login
        </button>
        {error && <span className="failure">Oh oh, algo salio mal wachin!</span>}
      </form>
      <Cancel className="loginCancel" onClick={() => setShowLogin(false)} />
    </div>
  );
}