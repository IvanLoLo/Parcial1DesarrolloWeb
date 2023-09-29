import React from "react";

const Cafe = ({ info, onClick }) => {
    return (
      <tr onClick={() => onClick(info)} style={{cursor: 'pointer'}}>
        <th scope="row">{info.id}</th>
        <td>{info.name}</td>
        <td>{info.type}</td>
        <td>{info.region}</td>
      </tr>
    );
  };  

export default Cafe;
