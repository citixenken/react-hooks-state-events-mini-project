import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectedCategory }) {
  const categoryButton = categories.map((category, index) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
        key={index}
        className={className}
        onClick={() => onSelectedCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
