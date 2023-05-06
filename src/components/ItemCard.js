function ItemCard({item}) {
    return (
      <div className="card h-60 shadow-xl">
        <figure><img src={item.img} alt="Item image" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{item.name}</h2>
        </div>
      </div>
    );
}

export default ItemCard;