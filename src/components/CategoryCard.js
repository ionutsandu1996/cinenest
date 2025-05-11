function CategoryCard({ category }) {
  return (
    <div className="bg-gray-800 rounded p-4 text-center hover:bg-yellow-500 hover:text-black cursor-pointer">
      <span className="text-lg font-semibold">{category}</span>
    </div>
  );
}

export default CategoryCard;
