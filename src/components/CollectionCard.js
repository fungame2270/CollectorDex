function CollectionCard() {
    return (
      <div className="card w-96 h-72 bg-base-100 shadow-xl">
        <figure><img src="https://i.imgur.com/00zlJWq.jpeg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
}

export default CollectionCard;