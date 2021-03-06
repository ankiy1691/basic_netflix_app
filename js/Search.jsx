import React, { Component } from "react";
import ShowCard from "./ShowCard";
import Header from "./Header";

class Search extends Component {
  state = {
    searchTerm: ""
  };
  componentWillMount(){
    const movie = this.props.match.params.searchValue;
    this.setState({searchTerm:movie})
  }
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          showSearch
          searchTerm={this.state.searchTerm}
        />
        <div>

          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map((show, index) => (
              <ShowCard {...show} key={show.imdbID} id={index} />
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
