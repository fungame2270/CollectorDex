function CollectionCard({collection, onClick}) {
    return (
      <div className="card h-72 shadow-xl" onClick={onClick}>
        <figure><img src={collection.img} alt="Collection img" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{collection.name}</h2>
        </div>
      </div>
    );
}

export default CollectionCard;