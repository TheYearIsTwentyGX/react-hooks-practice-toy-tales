import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then(setToys);
  }, []);

  function addToy(newToy) {
    setToys([...toys, newToy]);
  }
  function handleLike(toy) {
    const updatedToys = toys.map((t) => {
      if (t.id === toy.id) {
        return { ...t, likes: t.likes + 1 };
      }
      return t;
    });
    setToys(updatedToys);
  }
  function deleteToy(toy) {
    setToys(toys.filter((t) => t.id !== toy.id));
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm onAdd={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={deleteToy} onLike={handleLike}/>
    </>
  );
}

export default App;
