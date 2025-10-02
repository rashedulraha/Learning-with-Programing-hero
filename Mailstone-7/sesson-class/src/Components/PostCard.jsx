const PostCard = ({ plant }) => {
  const { image, name, price, category, description } = plant;

  return (
    <div className="card bg-base-100 w-full shadow-sm border p-4 rounded-md">
      <figure className="w-full h-48">
        <img className="w-full h-full object-cover" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="flex items-center justify-between mt-5 text-center mb-5">
          <p className="text-left font-bold"> Price : {price}</p>
          <p>{category}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View details </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
