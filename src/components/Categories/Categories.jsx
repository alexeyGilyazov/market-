import "./Categories.css";

export default function Categories({
  allCategory,
  chooseCategory,
  resetFilter,
  currentCategory,
}) {
  return (
    <div className="category">
      <button
        className={`category__name ${currentCategory === "all" ? "active" : ""}`}
        onClick={resetFilter}
      >
        Show All
      </button>
      {allCategory.map((el, index) => (
        <div
          key={index}
          onClick={() => chooseCategory(el)}
          className={`category__name ${currentCategory === el ? "active" : ""}`}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
