import { useSelector } from 'react-redux';

const Header = () => {
  const cartItemCount = useSelector(state => 
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="bg-white shadow p-4">
      <nav className="container mx-auto flex space-x-4">
        <Link to="/" className="font-bold">Menu</Link>
        <Link to="/order" className="font-bold">
          Order {cartItemCount > 0 && `(${cartItemCount})`}
        </Link>
      </nav>
    </header>
  );
};