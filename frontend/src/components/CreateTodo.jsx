import { useEffect, useState } from "react";

export function CreateTodo() {

    //react-query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

  
    const fetchData = () => {
        fetch("http://localhost:3001/todo", {
          method: "POST",
          body: JSON.stringify({
              title: title,
              description: description
          }),
          headers: {
              "Content-type": "application/json"
          }
      })
      .then(async function(res) {
          const json = await res.json();
          alert("Todo added");
      })
      } 
    
      useEffect(() => {
        fetchData();
      }, [])

      const handleButton = () => {
        fetchData();
      }

    

  return (
    <div>
      <input
        style={{ margin: 10, padding: 10 }}
        type="text"
        placeholder="title"
        onChange={function(e) {
            const value = e.target.value;
            setTitle(value);
        }}
      ></input>{" "}
      <br />
      <input
        style={{ margin: 10, padding: 10 }}
        type="text"
        placeholder="description"
        onChange={function(e) {
            const value = e.target.value;
            setDescription(value);
        }}
      ></input>{" "}
      <br />
      <button style={{ margin: 10, padding: 10 }} onClick={handleButton}>Add a todo</button>
    </div>
  );
}
