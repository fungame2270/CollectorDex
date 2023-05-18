function CollectionCard({collection, onClick, className}) {
    return (
      <div className={`card h-60 shadow-xl ${className}`} onClick={onClick}>
        <figure><img src={collection.img} alt="Collection img" /></figure>
        <div className="h-[50%]">
          <div className=" text-2xl flex flex-row justify-between my-7 mx-10">
            <p className=" font-bold">{collection.name}</p>
            <p>({collection.items.length})</p>
          </div>
        </div>
      </div>
    );
}

export default CollectionCard;