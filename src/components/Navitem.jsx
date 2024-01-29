function Navitem({ text1, text2, text3, text4, text5 }) {
  return (
    <li className="cars-list-item">
      <a href="https://www.rentpolicecar.com" target="_blank">
        {text1}
      </a>
      <a href="https://www.rentpolicecar.com/rentals" target="_blank">
        {text2}
      </a>
      <a href="https://www.rentpolicecar.com/about" target="_blank">
        {text3}
      </a>
      <a href="https://www.rentpolicecar.com/contact" target="_blank">
        {text4}
      </a>
      <a href="https://www.policecarhireuk.co.uk/gallery" target="_blank">
        {text5}
      </a>
    </li>
  );
}

export default Navitem;
