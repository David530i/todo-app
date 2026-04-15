function FilterButtons({ currentFilter, onFilterChange }) {
  return (
    <div className="filter-buttons">
      <button
        className={currentFilter === "all" ? "active-filter" : ""}
        onClick={() => onFilterChange("all")}
      >
        Összes
      </button>

      <button
        className={currentFilter === "active" ? "active-filter" : ""}
        onClick={() => onFilterChange("active")}
      >
        Aktív
      </button>

      <button
        className={currentFilter === "completed" ? "active-filter" : ""}
        onClick={() => onFilterChange("completed")}
      >
        Kész
      </button>
    </div>
  );
}

export default FilterButtons;