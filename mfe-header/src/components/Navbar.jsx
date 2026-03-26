import React, { useState, useEffect } from 'react';
import eventBus from 'shared/eventBus';
import './Navbar.css';

function Navbar() {
  const [notifications, setNotifications] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // S'abonner à l'événement `game:joined`
    const handleGameJoined = () => {
      setNotifications((prev) => prev + 1);
    };
    eventBus.on('game:joined', handleGameJoined);

    // S'abonner à l'événement `cart:updated`
    const handleCartUpdated = (count) => {
      setCartCount(count);
    };
    eventBus.on('cart:updated', handleCartUpdated);

    // Cleanup des abonnements
    return () => {
      eventBus.off('game:joined', handleGameJoined);
      eventBus.off('cart:updated', handleCartUpdated);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo">PixelArena</span>
        <span className="mfe-badge">MFE</span>
      </div>

      <div className="navbar-menu">
        <button className="nav-button">Lobby</button>
        <button className="nav-button">Boutique</button>
      </div>

      <div className="navbar-user">
        <span className="username">Joueur_42</span>

        {/* Icone Panier */}
        <button className="nav-button cart-btn">
          🛒
          {cartCount > 0 && <span className="badge cart-badge">{cartCount}</span>}
        </button>

        {/* Icone Notifications */}
        <button className="nav-button notification-btn">
          🔔
          {notifications > 0 && <span className="badge">{notifications}</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
