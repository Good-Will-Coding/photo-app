import React, { Component } from "react";

class SearchBar extends Component {
    onInputChange(e) {
        console.log(e.target.value)
    }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
        <label> Photo Search</label>
          <input type="text" onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
