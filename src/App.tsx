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
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
  });
  return (
    <div className="w-100 h-auto bg-[#f3f7f7]">
      <Header />
      <Form progress={progress} />
    </div>
  );
}

export default App;
