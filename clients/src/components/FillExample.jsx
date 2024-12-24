import { Link } from "react-router-dom";
import "./App.css";
function FillExample() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            See all your task
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">
            Add your task
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/update/:id" className="nav-link">
            Edit your task
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FillExample;
