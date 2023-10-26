import { useEffect, useState } from "react";


export const FollowMouse = () => {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("efecto");

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log({ clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };
    if (enable) {
      window.addEventListener("pointermove", handleMove);
    }
    return () =>{  // => Cleanup methot se ejecuta antes y después de que se desmonte el componente   
      window.removeEventListener("pointermove", handleMove);
      setPosition({ x: 0, y: 0 })
    }
  }, [enable]);

  //* Podemos ver las cantidad de suscripciones a eventos con el getEventListeners(), es importante limpiar los eventos suscriptos 

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable);
  
    return () => {
    document.body.classList.remove('no-cursor', enable);
    }
  }, [enable])
  

  return (
    <main>
      <div
        style={{
          position: "absolute",
          backgroundColor: "#09f",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button
        onClick={() => {
          setEnable(!enable);
        }}
      >
        {enable ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
}
