

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <span className="logo-badge">AG</span>
        <span className="logo-text">PRIME</span>
      </div>
      
      {/* Clickable navbar cart layout indicator */}
      <div className="cart-icon-container">
        <span>🛒</span>
        <span>Cart</span>
        <span className="cart-count">{cartCount}</span>
      </div>
    </nav>
  );
}