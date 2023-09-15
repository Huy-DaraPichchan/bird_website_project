import React, { useState } from "react";
import ListCard from "./ListCard";

function NarrowListView({ data }) {


  return (
    <div className="narrow-list-view">
      <div className="list-container">
        <div
          className="card-row"

        >
          {data.map((item, index) => (
            <ListCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NarrowListView;
