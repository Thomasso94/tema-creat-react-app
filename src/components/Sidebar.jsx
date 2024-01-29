import Navitem from "./Navitem";

function Sidebar() {
  return (
    <aside className="cars-sidebar">
      <nav>
        <ul>
          <Navitem text1="Home" />
          <Navitem text2="Rentals" />
          <Navitem text3="About" />
          <Navitem text4="Contact" />
          <Navitem text5="Gallery" />
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
