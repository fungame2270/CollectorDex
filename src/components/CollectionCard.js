function CollectionCard({collection}) {
    return (
      <div className="card h-72 shadow-xl">
        <figure><img src={collection.img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{collection.name}</h2>
        </div>
      </div>
    );
}

export default CollectionCard;