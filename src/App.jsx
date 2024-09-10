import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TemasList from "./components/TemasList";
import TemaAdd from "./components/TemaAdd";
import "./App.css";

function App() {
  const dataCurso = [
    {
      id: uuidv4(),
      unidad: 1,
      fecha: "10-07-2024",
      tema: "Introducción a React",
      profesor: "Diego Simonelli",
    },
    {
      id: uuidv4(),
      unidad: 2,
      fecha: "17-07-2024",
      tema: "Hook useState",
      profesor: "Diego Simonelli",
    },
    {
      id: uuidv4(),
      unidad: 3,
      fecha: "24-07-2024",
      tema: "Hook useEffect",
      profesor: "Diego Simonelli",
    },
    {
      id: uuidv4(),
      unidad: 4,
      fecha: "31-07-2024",
      tema: "Routes",
      profesor: "Diego Simonelli",
    },
    {
      id: uuidv4(),
      unidad: 5,
      fecha: "07-08-2024",
      tema: "Estilado",
      profesor: "Diego Simonelli",
    },
    {
      id: uuidv4(),
      unidad: 6,
      fecha: "14-08-2024",
      tema: "Contexto",
      profesor: "Diego Simonelli",
    },
    {
      id: uuidv4(),
      unidad: 7,
      fecha: "21-08-2024",
      tema: "Peticiones HTTP",
      profesor: "Diego Simonelli",
    },
    {
      id: uuidv4(),
      unidad: 8,
      fecha: "04-09-2024",
      tema: "Deploy",
      profesor: "Diego Simonelli",
    },
  ];

  const [temas, setTemas] = useState(dataCurso);
  const [temaedit, setTemaEdit] = useState(null);

  // Agregar temas
  const agregarTema = (item) => {
    item.id = uuidv4();
    setTemas([...temas, item]);
  };
  // Eliminar un tema
  const borrarTema = (id) => {
    setTemas(temas.filter((tema) => tema.id != id));
  };
  // Editar y modificar un tema
  const editarTema = (tema) => {
    const temaEditado = temas.map((i) => (i.id === tema.id ? tema : i));
    setTemas(temaEditado);
    setTemaEdit(null);
  };

  return (
    <div className="container">
      <h1>Curso de React - InoveCode -</h1>
        <h2>Temario del curso</h2>
          <TemasList temas={temas} borrarTema={borrarTema} setTemaEdit={setTemaEdit} />
          <TemaAdd agregarTema={agregarTema} editarTema={editarTema} temaedit={temaedit} />
    </div>
  );
}

export default App;
