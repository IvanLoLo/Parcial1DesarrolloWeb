import React, { useState } from "react";
import Cafe from "./Cafe";

const listaCafe = [{"id":1,"name":"Black Coffee","type":"Regular","region":"South America"},{"id":2,"name":"Espresso","type":"Strong","region":"Italy"},{"id":3,"name":"Cappuccino","type":"Milk","region":"Italy"},{"id":4,"name":"Latte","type":"Milk","region":"Europe"},{"id":5,"name":"Mocha","type":"Chocolate","region":"Middle East"},{"id":6,"name":"Americano","type":"Regular","region":"United States"},{"id":7,"name":"Macchiato","type":"Strong","region":"Italy"},{"id":8,"name":"Flat White","type":"Milk","region":"Australia"},{"id":9,"name":"Turkish Coffee","type":"Strong","region":"Turkey"},{"id":10,"name":"Cortado","type":"Milk","region":"Spain"}]

function ListaCafes({ onCoffeeSelect }) { 

  const handleCoffeeClick = (coffee) => {
    onCoffeeSelect(coffee);
    console.log(coffee);
  };

  return (
    <div>
      <table className="table" style={{textAlign: 'left'}}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Región</th>
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