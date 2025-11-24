import "./styles/theme.css";
import "./styles/global.css";

import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Ola mundo! 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sapiente
        dolores qui debitis dolorum ipsum, architecto temporibus, commodi ullam
        alias accusantium delectus reiciendis. Reprehenderit, accusamus delectus
        praesentium quam obcaecati dolores!
      </p>
    </>
  );
}
