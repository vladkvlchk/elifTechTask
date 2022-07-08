import { Link } from 'react-router-dom';
import './nav.module.scss'

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/shopingcart">Shopping Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
