import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { useState } from "react";

export interface progressProps {
  first: number;
  second: number;
  third: number;
  fourth: number;
}

function App(): JSX.Element {
  const [progress, setProgress] = useState<progressProps>({
    first: 100,
    second: 30,
    third: 80,
    fourth: 40,
  });
  return (
    <div className="w-100 h-screen bg-white">
      <Header />
      <Form progress={progress} />
    </div>
  );
}

export default App;
