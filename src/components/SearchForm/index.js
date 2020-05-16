import React from "react";
import "./style.css";


function SearchForm(props) {
 
  return (
    <form className="search">
      <div className="form-group">
        {/* <label htmlFor="search">Search:</label> */}
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          type="text"
          className="form-control"
          placeholder="Search by first Name"
          id="name"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
