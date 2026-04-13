import CartButton from '../Cart/CartButton';

const MainHeader = (props) => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 10%',
      height: '5rem',
      backgroundColor: '#2b4739', 
      color: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.8rem', letterSpacing: '1px' }}>Central Perk Shop</h1>
      <nav>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;