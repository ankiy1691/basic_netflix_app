import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSearchTerm } from "./actionCreators";

const Header = props => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        type="text"
        placeholder="Search"
        value={props.searchTerm}
        onChange={props.handleSearchTermChange}
      />
    );
  } else {
    utilSpace = (
      <h2 className="header-back">
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">
          svideo
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};
const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
