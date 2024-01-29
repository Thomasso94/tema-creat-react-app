function Header({ title }) {
  return (
    <header className="cars-header">
      <img
        src="https://png.pngtree.com/png-vector/20230209/ourmid/pngtree-police-car-cartoon-png-image_6592485.png"
        alt="Car image logo"
      />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
