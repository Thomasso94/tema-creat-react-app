function Card({ imageUrl, title, yearoffab, maxspeed, price }) {
  return (
    <div className="cars-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{`${yearoffab}`}</p>
      <p>{`${maxspeed} / h`}</p>
      <p>{`$${price} / d`}</p>
    </div>
  );
}

export default Card;
