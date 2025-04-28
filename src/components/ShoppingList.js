import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  // Filter logic
  const itemsToDisplay = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      {/* Only use Filter component */}
      <Filter
        search={searchTerm}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />

      {/* Display filtered items */}
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
