import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef
} from "react";
import { useRaf } from "react-use";
import ReactDOM from "react-dom";

function App() {
  const value = useRaf(5000);

  return <div>{value}</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
