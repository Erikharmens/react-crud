import Heading from "../layout/Heading";
import { Link } from "react-router-dom";

export default function DashboardPage({ children }) {
	console.log(children);
  return (
    <>
      <Heading content="Dashboard" />
      <nav>
        Sections: <Link to="/dashboard/products">Products</Link> | {" "} <Link to="/dashboard/about">About</Link>
      </nav>
	  {children ? children : <p>Please select a page</p>}
    </>
  );
}
