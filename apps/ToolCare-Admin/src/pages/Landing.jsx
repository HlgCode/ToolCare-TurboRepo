import { Link } from "react-router-dom";
import "ui/src/index.css";
import "../../../../packages/ui/src/App.css";

export function Landing() {
  return (
    <>
      <div className="cotainer">
        <h1 className="title">
          Bienvenido a <span>ToolCare</span>
        </h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <button>
          <Link to="/login"> Login </Link>
        </button>
      </div>
    </>
  );
}
