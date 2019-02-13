import React from "react";
import { connect } from "react-redux";
import ShowCard from "./ShowCard";
import Header from "./Header";

const Search = props => (
  <div className="search">
    <Header showSearch />
    {/* <pre><code>{JSON.stringify(preload,nul,4)}</code></pre> */}
      <div>
      {props.shows
        .filter(
          show =>
            `${show.title} 
            ${show.description}`
              .toUpperCase()
              .indexOf(props.searchTerm.toUpperCase()) >= 0
        )
        .map((show, index) => (
          <ShowCard {...show} key={show.imdbID} id={index} />
        ))}
    </div>
  </div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
