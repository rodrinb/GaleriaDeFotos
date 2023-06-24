import React, { useState } from "react";
import "./App.css";

const nameButtons = [
  {
    id: 0,
    name: "30 oct",
    folders: [
      {
        id: 0,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 1,
        name: "Actividad grafoplastica 2022",
      },
      {
        id: 2,
        name: "Cierre de Act. 2022",
      },
      {
        id: 3,
        name: "Dia de los Jardines",
      },
      {
        id: 4,
        name: "Festejo Aniversario 2022",
      },
      {
        id: 5,
        name: "Inicio Jardin Maternal",
      },
      {
        id: 6,
        name: "Jornada Plantación Arboles",
      },
    ],
  },
  {
    id: 1,
    name: "St.Maris",
    folders: [
      {
        id: 0,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 1,
        name: "Actividad grafoplastica 2022",
      },
      {
        id: 2,
        name: "Cierre",
      },
      {
        id: 3,
        name: "Dia de los Jardines",
      },
      {
        id: 4,
        name: "Festejo Aniversario 2022",
      },
      {
        id: 5,
        name: "Inicio Jardin Maternal",
      },
      {
        id: 6,
        name: "Jornada Plantación Arboles",
      },
    ],
  },
  {
    id: 2,
    name: "CPB Evita",
    folders: [
      {
        id: 0,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 1,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 2,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 3,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 4,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 5,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 6,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 7,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
    ],
  },
  {
    id: 3,
    name: "CPB San Martin",
    folders: [
      {
        id: 0,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 1,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 2,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 3,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 4,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 5,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 6,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 7,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
    ],
  },
  {
    id: 4,
    name: "Los Grillitos",
    folders: [
      {
        id: 0,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 1,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 2,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 3,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 4,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 5,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 6,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 7,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
    ],
  },
  {
    id: 5,
    name: "Maximo Abasolo",
    folders: [
      {
        id: 0,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 1,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 2,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 3,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 4,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 5,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 6,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
      {
        id: 7,
        name: "Acompañamiento a las Trayectorias Escolares cierre 2022",
      },
    ],
  },
];
const imageFolders = {
  "Acompañamiento a las Trayectorias Escolares cierre 2022": require.context(
    "../src/images/treinta-oct/Acompañamiento",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Actividad grafoplastica 2022": require.context(
    "../src/images/treinta-oct/Actividad",
    false,
    /\.(png|jpe?g|svg)$/
  ),
  "Cierre de Act. 2022": require.context(
    "../src/images/treinta-oct/Cierre",
    false,
    /\.(png|jpe?g|svg)$/
  ),
};

function App() {
  const [subButtons, setSubButtons] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showTitle = (name, folders) => {
    setSubButtons(folders);
    setSelectedImages([]);
  };
  function importAll(r) {
    return r.keys().map(r);
  }
  const showImages = (folderName) => {
    const folder = subButtons.find(
      (subButton) => subButton.name === folderName
    );
    if (folder) {
      const imageContext = imageFolders[folderName];
      const images = importAll(imageContext);
      setSelectedImages(images);
      setCurrentIndex(0);
    }
  };

  const handlePrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentIndex < selectedImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
    { selectedImages.length > 0 ? <button onClick={() => setSelectedImages([])} >volver</button> : 
     <div>
     <h1>Adentro de la carpeta hay {selectedImages.length} fotos</h1>
     <h2>Galería de Imágenes</h2>
     <h3>Secretaría de Desarrollo Humano y Familia</h3>
     <h4>Dirección de C.P.B</h4>
     <div className="mainButtonsContainer">
        {nameButtons.map((button) => (
          <button
            style={{ marginLeft: "20px",backgroundColor:'black',color:'white',borderRadius:"60px",border:"solid green 1px",opacity:"60%" }}
            className={"mainButton"}
            key={button.id}
            onClick={() => showTitle(button.name, button.folders)}
          >
            {button.name}
          </button>
        ))}
      </div>
      <br></br>
      <div className="subButtonsContainer">
        {subButtons.map((subButton) => (
          <button
            style={{ marginLeft: "20px" }}
            className="subButton"
            key={subButton.id}
            onClick={() => showImages(subButton.name)}
          >
            {subButton.name}
          </button>
        ))}
      </div>
     </div>
      }
      <br></br>
      <div style={{ marginLeft: "400px" }} className="imageContainer">
        {selectedImages.length > 0 && (
          <img
            width="200px"
            src={`${process.env.PUBLIC_URL}${selectedImages[currentIndex]}`}
            alt={`Imagen ${currentIndex + 1}`}
            className="image"
          />
        )}
      </div>
      <br></br>
      {selectedImages.length > 0 ? (
        <div style={{ marginLeft: "600px" }} className="imageNavigation">
          <button
            style={{ marginLeft: "20px" }}
            onClick={handlePrevImage}
            disabled={currentIndex === 0}
          >
            Anterior
          </button>
          <button
            style={{ marginLeft: "20px" }}
            onClick={handleNextImage}
            disabled={currentIndex === selectedImages.length - 1}
          >
            Siguiente
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
