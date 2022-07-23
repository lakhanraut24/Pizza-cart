import { Link } from "react-router-dom";

const Navbar = () => {
  const cartstyle = {
    background: "#F59E0D ",
    display: "flex",
    padding: "6px 15px",
    borderRadius: "50px",
   
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="">
          <img style={{ height: 45 }} src="/Images/logo.png" alt="logo" />
        </Link>
        <ul className="flex items-center">
          <li >
            <Link to="/">home</Link>
          </li>
          <li className="ml-6">
            <Link to="/About">About</Link>
          </li>
          <li className="ml-6">
            <Link to="/Products">products</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div style={cartstyle}>
                <span>10</span>
                <img className="ml-2  " src="/Images/cart.png" alt="cart-icon" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
