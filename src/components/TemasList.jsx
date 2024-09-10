import React from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";



const TemasList = ({ temas, borrarTema, setTemaEdit }) => {
  return (
    <>
    <Table striped size="sm" responsive="md">
      <thead>
        <tr>
          <th>Unidad</th>
          <th>Fecha</th>
          <th>Tema</th>
          <th>Profesor</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {temas.length > 0 ? (
          temas.map((tema) => (
            <tr key={tema.id}>
              <td>{tema.unidad}</td>
              <td>{tema.fecha}</td>
              <td>{tema.tema}</td>
              <td>{tema.profesor}</td>
              <td>
                <Button variant="outline-warning" onClick={() => setTemaEdit(tema)}>
                  Editar
                </Button>{" "}
                <Button variant="outline-danger" onClick={() => borrarTema(tema.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr colSpan={3}>No se han cargados temas al curso</tr>
        )}
      </tbody>
    </Table>
    <br/>
    <hr/>
    </>
  );
};

export default TemasList;
