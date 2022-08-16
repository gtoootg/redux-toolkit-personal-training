const initialPersonState = ["Michihiro", "Goto"];

const personsReducer = (state, action) => {
  // const nexState = state.slice();
  // nextState.push(action.payload);

  switch (action.type) {
    case "resetPersons": {
      return action.value;
    }

    case "eraseAllPersons": {
      return action.value;
    }

    case "addNewPerson": {
      return [...state, action.payload];
    }

    default: {
      return initialPersonState;
    }
  }
};

export default personsReducer;
