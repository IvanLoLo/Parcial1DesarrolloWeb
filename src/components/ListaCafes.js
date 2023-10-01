import React, { useEffect, useState } from "react";
import Cafe from "./Cafe";
import { FormattedMessage } from "react-intl";
import './styles.css';

function ListaCafes({ onCoffeeSelect }) { 

  const [listaCafe, setListaCafe] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cafes")
      .then((response) => response.json())
      .then((data) => setListaCafe(data));
  }, []);

  const handleCoffeeClick = (coffee) => {
    onCoffeeSelect(coffee);
  };

  return (
    <div style={{paddingLeft: '6rem'}}>
      <table className="table" style={{textAlign: 'left', maxWidth: '95%'}}>
        <thead className="thead-dark header">
          <tr>
            <th scope="col">#</th>
            <th scope="col"><FormattedMessage id="Nombre" /></th>
            <th scope="col"><FormattedMessage id="Tipo" /></th>
            <th scope="col"><FormattedMessage id="Región" /></th>
          </tr>
        </thead>
        <tbody>
          {listaCafe.map((e, i) => (
            <Cafe key={i} info={e} onClick={() => handleCoffeeClick(e)}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaCafes;