import React from "react";
function Filter(filter, setFilter) {
  return (
    <div className="filter">
      <h2>filtrar</h2>
      <div className="filter-option">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todas</option>
            <option value="completed">Completas</option>
            <option value="incomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem alfabética</p>
          <button>Asc</button>
          <button>Desc</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
