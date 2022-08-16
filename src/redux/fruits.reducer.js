const initialFruitState = ["banana", "melon"];

const fruitsReducer = (state, action) => {
  // const nexState = state.slice();
  // nextState.push(action.payload);

  switch (action.type) {
    case "resetFruits": {
      return action.value;
    }

    case "eraseAllFruits": {
      return action.value;
    }

    case "addFruit": {
      return [...state, action.payload];
    }

    default: {
      return initialFruitState;
    }
  }
};

export default fruitsReducer;
