import "../main/main.css"
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useEffect, useState } from "react";
import { Room, Star, StarBorder } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import Register from "../auth/register";
import Login from "../auth//login";
import { Link, useNavigate } from 'react-router-dom';


function Main() {
  //Para mantener la sesion del login 
  const myStorage = window.localStorage;
  const [currentUsu_Nombre, setCurrentUsu_Nombre] = useState(myStorage.getItem("usuario"));
  const [hotspot, sethotspot] = useState([]);
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [newPlace, setNewPlace] = useState(null);
  const [titulo, settitulo] = useState(null);
  const [desc, setDesc] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: -21.53549,
    longitude: -64.72956,
    zoom: 12,
  });
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  let navigate= useNavigate();
  function handletablaTurismo() {
    navigate('/tablaTurismo')
  }
  function handletablaAgencia() {
    navigate('/tablaAgencia')
  }
  function handletablaServicio() {
    navigate('/tablaServicio')
  }
  function handletablaHotel() {
    navigate('/tablaHotel')
  }
  function handletablaRestaurante() {
    navigate('/tablaRestaurante')
  }
 
  
 
  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };

  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    setNewPlace({
      lat: latitude,
      long: longitude,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newHotspot = {
      usu_nombre: currentUsu_Nombre,
      titulo,
      desc,
      lat: newPlace.lat,
      long: newPlace.long,
    };

    try {
      const res = await axios.post("http://localhost:3800/api/hotspot", newHotspot);
      sethotspot([...hotspot, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const gethotspot = async () => {
      try {
        const allhotspot = await axios.get("http://localhost:3800/api/hotspot");
        sethotspot(allhotspot.data);
      } catch (err) {
        console.log(err);
      }
    };
    gethotspot();
  }, []);

  const handleLogout = () => {
    setCurrentUsu_Nombre(null);
    myStorage.removeItem("usuario");
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiZGFudGVhYnJhaGFtMiIsImEiOiJja3g2MHU0am0ybnhnMnVybm9qd3Zjb3h4In0.5k5K5HwhIaGz335DWXxf4A"
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => setViewport(viewport)}
        onDblClick={currentUsu_Nombre && handleAddClick}
      >
        {hotspot.map((p) => (
          <>
            <Marker
              latitude={p.lat}
              longitude={p.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <Room
                style={{
                  fontSize: 7 * viewport.zoom,
                  color:
                    currentUsu_Nombre === p.usu_nombre ? "tomato" : "slateblue",
                  cursor: "pointer",
                }}
                onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
              />
            </Marker>
            {p._id === currentPlaceId && (
              <Popup
                key={p._id}
                latitude={p.lat}
                longitude={p.long}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setCurrentPlaceId(null)}
                anchor="left"
              >
                <div className="card">
                  <label>Titulo</label>
                  <h4 className="place">{p.titulo}</h4>
                  <label>Descripción</label>
                  <p className="desc">{p.desc}</p>
                  <label>Información</label>
                  <span className="Usu_Nombre">
                    Fijado por: <b>{p.usu_nombre}</b>
                  </span>
                  <span className="date">{format(p.createdAt)}</span>
                </div>
              </Popup>
            )}
          </>
        ))}
        {newPlace && (
          <>
            <Marker
              latitude={newPlace.lat}
              longitude={newPlace.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
            >
              <Room
                style={{
                  fontSize: 7 * viewport.zoom,
                  color: "tomato",
                  cursor: "pointer",
                }}
              />
            </Marker>
            <Popup
              latitude={newPlace.lat}
              longitude={newPlace.long}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setNewPlace(null)}
              anchor="left"
            >
              <div>
                <form onSubmit={handleSubmit}>
                  <label>Titulo</label>
                  <input
                    placeholder="Ingresa un Titulo a tu Hotspot!"
                    autoFocus
                    onChange={(e) => settitulo(e.target.value)}
                  />
                  <label>Descripción	</label>
                  <textarea
                    placeholder="Describe porque seleccionaste este lugar."
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <button type="submit" className="submitButton">
                    Fijar Hotspot
                  </button>
                </form>
              </div>
            </Popup>
          </>
        )}
        {currentUsu_Nombre ? (
          <>
          <button onClick={handletablaTurismo}> Ver Tipo Turismo</button>
          <button onClick={handletablaAgencia}> Ver Agencias</button>
          <button onClick={handletablaServicio}> Ver Tipo Servicios</button>
          <button onClick={handletablaHotel}> Ver Hoteles</button>
          <button onClick={handletablaRestaurante}> Ver Restaurantes</button>
          <button className="button logout" onClick={handleLogout}>
            Cerrar Sesion
          </button></>                
          
        ) : (
          <div className="buttons">
            <button className="button login" onClick={() => setShowLogin(true)}>
              Iniciar Sesion
            </button>
            <button
              className="button register"
              onClick={() => setShowRegister(true)}
            >
              Registrarse
            </button>
          </div>
        )}
        {showRegister && <Register setShowRegister={setShowRegister} />}
        {showLogin && (
          <Login
            setShowLogin={setShowLogin}
            setCurrentUsu_Nombre={setCurrentUsu_Nombre}
            myStorage={myStorage}
          />
        )}
      </ReactMapGL>
    </div>
  );
}

export default Main;