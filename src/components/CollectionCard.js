function CollectionCard({collection, onClick, htmlFor}) {
    return (
      <div htmlFor={htmlFor} className="card h-72 shadow-xl" onClick={onClick}>
        <figure><img src={collection.img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{collection.name}</h2>
        </div>
      </div>
    );
}

export default CollectionCard;