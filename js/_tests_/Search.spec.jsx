import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../store";
import { setSearchTerm } from "../actionCreators";
import { shallow, render } from "enzyme";
import Search, { Unwrapped as UnwrappedSearch } from "../Search";
import ShowCard from "../ShowCard";
import preload from "../../data.json";

test("Search renders correctly", () => {
  const component = shallow(
    <UnwrappedSearch shows={preload.shows} searchTerm="" />
  );
  expect(component).toMatchSnapshot();
});

test("Search should render correct amount of shows", () => {
  const component = shallow(
    <UnwrappedSearch shows={preload.shows} searchTerm="" />
  );
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});
test("Search should render correct amount of shows based on search term without redux", () => {
  const searchWord = "black";
  const component = shallow(
    <UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />
  );

  const showCount = preload.shows.filter(show => {
    return (
      `${show.title} ${show.description}`
        .toUpperCase()
        .indexOf(searchWord.toUpperCase()) >= 0
    );
  }).length;

  expect(component.find(ShowCard).length).toEqual(showCount);
});
test("Search should render correct amount of shows based on search with redux", () => {
  const searchWord = "Black";
  store.dispatch(setSearchTerm(searchWord));
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search shows={preload.shows} />
      </MemoryRouter>
    </Provider>
  );
  const showCount = preload.shows.filter(show =>
    `${show.title.toUpperCase()} ${show.description.toUpperCase()}`.includes(
      searchWord.toUpperCase()
    )
  ).length;
  expect(showCount).toEqual(component.find(".show-card").length);
});
//component.find(Header).dive().find('input').simulate('change', { target: { value: searchWord } });
