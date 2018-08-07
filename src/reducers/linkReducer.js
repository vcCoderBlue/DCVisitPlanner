const linkReducer = (state = {
  favorites: []
}, action) => {
  switch (action.type) {
    case "ADD_LINK":
    alert('Link added to Favorites');
      state = {
        favorites: [state.favorites, action.payload]
      };
      break;
    }
    return state;
};

export default linkReducer;
