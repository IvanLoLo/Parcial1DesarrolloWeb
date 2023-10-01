import React from "react";

const Cafe = ({ info, onClick }) => {
    return (
      <tr onClick={() => onClick(info)} style={{cursor: 'pointer'}}>
        <th scope="row">{info.id}</th>
        <td>{info.nombre}</td>
        <td>{info.tipo}</td>
        <td>{info.region}</td>
      </tr>
    );
  };  

export default Cafe;
