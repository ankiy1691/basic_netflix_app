import rootReducer from "../reducers";

test("SET_SEARCH_TERM", () => {
  const state = rootReducer(
    { searchTerm: "", apiData: {} },
    { type: "SET_SEARCH_TERM", payload: "black" }
  );
  expect(state).toEqual({ searchTerm: "black", apiData: {} });
});

test("ADD_API_DATA", () => {
  const state = rootReducer(
    { searchTerm: "", apiData: {} },
    {
      type: "ADD_API_DATA",
      payload: {
        rating: "0.6",
        title: "Black Mirror",
        year: "2011–",
        description: "A television anthology series that shows the dark side of life and technology.",
        poster: "bm.jpg",
        imdbID: "tt2085059",
        trailer: "jDiYGjp5iFg"
      }
    }
  );
  expect(state).toEqual({
    searchTerm: "",
    apiData: {
      tt2085059: {
        rating: "0.6",
        title: "Black Mirror",
        year: "2011–",
        description: "A television anthology series that shows the dark side of life and technology.",
        poster: "bm.jpg",
        imdbID: "tt2085059",
        trailer: "jDiYGjp5iFg"
      }
    }
  });
});
