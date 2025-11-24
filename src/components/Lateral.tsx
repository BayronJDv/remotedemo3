import React from 'react';
import './Lateral.css';

const Lateral: React.FC = () => {
  const [products, setProducts] = React.useState([
    { id: 1, oncart: true, name: "product1", price: 100, image: "https://riderlabstore.com/cdn/shop/files/VN0A3MTJ5GX-Tenis-vans-filmore-hombre-negro-blanco-2@2x.jpg?v=1701876590" },
    { id: 2, oncart: false, name: "product2", price: 200, image: "https://crazyshark.com.co/web/wp-content/uploads/2023/06/VN0A5FCBB9M-1.webp" },
    { id: 3, oncart: false, name: "product3", price: 300, image: "https://ferreira.vtexassets.com/arquivos/ids/334384-800-auto?v=638962285101200000&width=800&height=auto&aspect=true" },
    { id: 4, oncart: false, name: "product4", price: 400, image: "https://media.falabella.com/falabellaCO/139111906_01/w=800,h=800,fit=pad" },
    { id: 5, oncart: false, name: "product5", price: 500, image: "https://centralsport.online/media/mf_webp/jpeg/media/catalog/product/cache/f9bb4946b08eb56afc1e83d5b55bf276/V/N/VN0007P9KAQ1-zapatillas-baratas-casual-wm-caldrone-mujer-gris-1.webp" },
    { id: 6, oncart: false, name: "product6", price: 600, image: "https://www.tradeinn.com/h/14218/142180540/vans-zapatillas-knu-skool.webp" },
    { id: 7, oncart: false, name: "product7", price: 700, image: "https://ferreira.vtexassets.com/arquivos/ids/424005/vn_vn000d5ibymcasa_1.jpg?v=638387583207000000" },
  ]);

  const removeFromCart = (id: number) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, oncart: false } : product
    ));
  };

  React.useEffect(() => {
    const handleAddToCart = (event: CustomEvent) => {
      const { id } = event.detail;
      setProducts(prevProducts =>
        prevProducts.map(product =>
          product.id === id ? { ...product, oncart: true } : product
        )
      );
    };

    window.addEventListener('addToCart', handleAddToCart as EventListener);

    return () => {
      window.removeEventListener('addToCart', handleAddToCart as EventListener);
    };
  }, []);

  const cartItems = products.filter(product => product.oncart);

  return (
    <div className="lateralparent">
      <h1>Demo Cart 🛒</h1>
      <div className="cart-list">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map(product => (
            <div key={product.id} className="cardbox">
              <img src={product.image} alt={product.name} className="cardbox-image" />
              <div className="cardbox-details">
                <span className="cardbox-name">{product.name}</span>
                <span className="cardbox-price">${product.price}</span>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Lateral;
