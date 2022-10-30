import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDelete, onLike}) {
  return (
    <div id="toy-collection">{toys.map(t => <ToyCard key={toys.indexOf(t)} toy={t} onDelete={onDelete} onLike={onLike}/>)}</div>
  );
}

export default ToyContainer;
