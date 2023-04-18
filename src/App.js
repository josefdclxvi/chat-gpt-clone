import { useEffect, useState } from "react";
import { getData } from "./utils";
import "./styles.css";

export default function App() {
  const [data, setData] = useState("");
  const [inputType, setInpitType] = useState("");
  const [message, setMessage] = useState("Hello");
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData(message).then((res) => {
      const result = typeof res.response === "string" ? res.response : "";
      setData(result);
      setLoading(false);
      setHasError(res.status);
    });
  }, [message]);

  const handleInput = (e) => {
    const { value } = e.target;
    setInpitType(value);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      setMessage(inputType);
      setInpitType("");
    }
  };

  const handleSubmit = (e) => {
    setMessage(inputType);
    setInpitType("");
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inputType}
        onChange={handleInput}
        placeholder="ask me anything"
        onKeyDown={handleEnterKey}
      />
      <button onClick={handleSubmit}>SEND</button>
      <br />
      <br />
      <label>{message}</label>
      <br />
      <br />
      {isLoading ? (
        <p>Typing ...</p>
      ) : (
        <p style={{ color: hasError ? "red" : "transparent" }}>{data}</p>
      )}
    </div>
  );
}
