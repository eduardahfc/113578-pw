import ProductItem from './ProductItem';

const FRIENDS_PRODUCTS = [
  { 
    id: 'p1', 
    price: 18.50, 
    title: 'Caneca Central Perk', 
    description: 'A clássica caneca gigante para beberes café enquanto contas como foi o teu dia.',
    image: '/images/mug.jpg'
  },
  { 
    id: 'p2', 
    price: 35.00, 
    title: 'Peluche Hugsy', 
    description: 'O fiel companheiro de adormecer. Atenção: ele não partilha comida!',
    image: '/images/hugsy.jpg'
  },
  { 
    id: 'p3', 
    price: 22.00, 
    title: 'Moldura Amarela', 
    description: 'A icónica moldura do olho mágico da porta da Monica. Um clássico de decoração.',
    image: '/images/moldura.jpeg'
  },
  { 
    id: 'p4', 
    price: 15.00, 
    title: 'Trifle da Rachel', 
    description: 'Metade doce, metade carne com ervilhas. Uma aventura culinária de Ação de Graças.',
    image: '/images/triffle.jpg'
  },
];

const Products = (props) => {
  return (
    <section style={{ padding: '3rem 2rem', textAlign: 'center', backgroundColor: '#fafcfb', minHeight: '100vh' }}>
      <h2 style={{ color: '#2b4739', marginBottom: '2rem', fontSize: '2rem' }}>Os Favoritos do Grupo</h2>
      
      <ul style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
        {FRIENDS_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;