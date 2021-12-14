import { Cancel, Room } from "@material-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
import "../auth/register.css";

export default function Register({ setShowRegister }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const usu_nombreRef = useRef();
  const usu_email = useRef();
  const usu_contrasena = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      usu_nombre: usu_nombreRef.current.value,
      usu_email: usu_email.current.value,
      usu_contrasena: usu_contrasena.current.value,
    };

    try {
      await axios.post("http://localhost:3800/api/usuario/registro", newUser);
      setError(false);
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="registerContainer">
      <div className="logo">
        <Room className="logoIcon" />
        <span>Tarija onHand</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input autoFocus placeholder="Nombre de Usuario" ref={usu_nombreRef} />
        <input type="email" placeholder="Email@gmail.com" ref={usu_email} />
        <input
          type="password"
          min="3"
          placeholder="Contraseña"
          ref={usu_contrasena}
        />
        <button className="registerBtn" type="submit">
          Registar
        </button>
        {success && (
          <span className="success">Registro Exitoso, ¡Disfruta tu aventura!</span>
        )}
        {error && <span className="failure">¡Ah caray!, algo no salio bien</span>}
      </form>
      <Cancel
        className="registerCancel"
        onClick={() => setShowRegister(false)}
      />
    </div>
  );
}