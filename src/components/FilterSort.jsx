 function FilterSort({
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
  onReset
}) {
  return (
    <div className="filter-sort-row">
      <div className="control-group">
        <label>Category</label>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="sports">Sports</option>
          <option value="accessories">Accessories</option>
          {/* Add your other categories here */}
        </select>
      </div>

      <div className="control-group">
        <label>Sort By</label>
        <select 
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Select...</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>

      <button className="reset-filters-btn" onClick={onReset}>
        Reset Filters
      </button>
    </div>
  );
}

export default FilterSort;