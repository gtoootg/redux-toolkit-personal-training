import { bindActionCreators } from "redux";

const personsActions = {
  resetPersons() {
    return {
      type: "resetPersons",
      value: ["michihiro", "goto", "aaa"],
    };
  },

  eraseAllPersons() {
    return {
      type: "eraseAllPersons",
      value: [],
    };
  },

  addNewPerson(newPerson) {
    return {
      type: "addNewPerson",
      payload: newPerson,
    };
  },

  // addFruit(newFruit) {
  //   return {
  //     type: "addFruit",
  //     payload: newFruit,
  //   };
  // },
};

export default personsActions;
