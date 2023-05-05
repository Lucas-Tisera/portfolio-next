import { Counter } from "./Counter";

export default function PostLayout ({children}) {
    return(
        <div>
            <Counter/>
            {children}
        </div>
    )
  };