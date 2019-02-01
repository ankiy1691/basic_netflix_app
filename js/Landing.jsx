/* import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="landing">
    <h1>svideo</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search">or Browse All</Link>
  </div>
);

export default Landing;
 */

import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Landing extends Component {
  state = {
    searchValue: "",
    redirect: false
  };
  handleSearchValue = event => {
    this.setState({ searchValue: event.target.value });
    //console.log(this.state);
  };
  handleSearchValueSubmit = () => {
    this.setState({ redirect: true });
    
  };
  render() {
    const { redirect, searchValue } = this.state;
    console.log(this.state);
    if (redirect) {
      return <Redirect to={`/search/${this.state.searchValue}`} />;
    }
    return (
      <div className="landing">
        <h1>svideo</h1>
        <input
          type="text"
          placeholder="Search"
          onChange={this.handleSearchValue}
          value={searchValue}
        />
        <button
          style={{
            marginRight: "20px",
            padding: "9px",
            color: "black"
          }}
          onClick={this.handleSearchValueSubmit}
        >
          Search Movie
        </button>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

export default Landing;

