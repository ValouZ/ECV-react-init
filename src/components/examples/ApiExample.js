import { useState, useEffect } from "react";

function ApiExample() {
  const [items, setItems] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems({
          items: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <h3>Api Example :</h3>
      {items.map((item) => (
        <div key={item.id}>
          <h5>{item.username}</h5>
        </div>
      ))}
    </div>
  );
}

export default ApiExample;
