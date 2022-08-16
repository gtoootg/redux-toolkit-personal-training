const fruitsActions = {
  resetFruits() {
    return {
      type: "resetFruits",
      value: ["banana", "melon"],
    };
  },

  eraseAllFruits() {
    return {
      type: "eraseAllFruits",
      value: [],
    };
  },

  addFruit(newFruit) {
    return {
      type: "addFruit",
      payload: newFruit,
    };
  },
};

export default fruitsActions;

let dummy;
