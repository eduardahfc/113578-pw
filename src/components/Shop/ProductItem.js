import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) => {
  const { title, price, description, id, image } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price, image })); 
  };

  return (
    <li style={{ 
      backgroundColor: 'white', 
      borderRadius: '16px', 
      boxShadow: '0 8px 24px rgba(43, 71, 57, 0.08)', 
      width: '280px', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      transition: 'transform 0.2s ease-in-out'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <img src={image} alt={title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
      
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#2b4739', fontSize: '1.3rem' }}>{title}</h3>
        
       
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#4a7c59', marginBottom: '1rem' }}>
          €{price.toFixed(2)}
        </div>
        
        <p style={{ color: '#666', fontSize: '0.95rem', flexGrow: 1, marginBottom: '1.5rem', lineHeight: '1.4' }}>
          {description}
        </p>
        
      
        <button 
          onClick={addToCartHandler}
          style={{
            backgroundColor: '#4a7c59',
            color: 'white',
            border: 'none',
            padding: '0.8rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'background-color 0.2s',
            boxShadow: '0 4px 10px rgba(74, 124, 89, 0.3)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#386345'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4a7c59'}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </li>
  );
};

export default ProductItem;