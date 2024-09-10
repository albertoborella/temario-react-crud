import React, { useState, useEffect } from "react";


const TemaAdd = ({ agregarTema, editarTema, temaedit }) => {
  useEffect(() => {
    //console.log(editData)
    if (temaedit !== null) {
      setTema(temaedit);
    } else {
      setTema({
        id: null,
        unidad: "",
        fecha: "",
        tema: "",
        profesor: "",
      });
    }
  }, [temaedit]);

  const [tema, setTema] = useState({
    id: null,
    unidad: "",
    fecha: "",
    tema: "",
    profesor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTema({ ...tema, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      tema.id !== "" &&
      tema.unidad !== "" &&
      tema.fecha !== "" &&
      tema.tema !== "" &&
      tema.profesor !== ""
    ) {
      if (temaedit !== null) {
        editarTema(tema);
      } else {
        agregarTema(tema);
        setTema({
          id: null,
          unidad: "",
          fecha: "",
          tema: "",
          profesor: "",
        });
      }
    }
  };

  return (
    <>
      <h2>Agregar nuevo tema</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="unidad"
          placeholder="Unidad número"
          value={tema.unidad}
          onChange={handleChange}
        />
        <input
          type="text"
          name="fecha"
          placeholder="Fecha de la clase"
          value={tema.fecha}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tema"
          placeholder="Tema de la clase"
          value={tema.tema}
          onChange={handleChange}
        />
        <input
          type="text"
          name="profesor"
          placeholder="Profesor"
          value={tema.profesor}
          onChange={handleChange}
        />

        <button className="btn btn-success agregar">Agregar tema</button>
      </form>
      <br/>
      <hr/>
    </>
  );
};

export default TemaAdd;
