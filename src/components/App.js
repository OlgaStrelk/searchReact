import React, { useState } from "react";
import "../styles/App.css";

import Input from "./Input";
import Form from "./Form";
import Button from "./Button";
// import Card from "./Card";

function App() {
  let [inputValue, setInputValue] = useState("text");
  const handleSubmit = () => {};
  const handleInput = (e) => {setInputValue(e.target.value)};
  return (
    <div className="App">
      <Form handleSubmit={handleSubmit}>
        <Input handleChange={handleInput} value={inputValue} />
        <Button text={"Search"} />
      </Form>
    </div>
  );
}

export default App;
