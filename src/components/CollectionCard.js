function CollectionCard({title,img,description}) {
    return (
      <div className="card h-72 shadow-xl">
        <figure><img src="https://i.imgur.com/00zlJWq.jpeg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>
        </div>
      </div>
    );
}

export default CollectionCard;