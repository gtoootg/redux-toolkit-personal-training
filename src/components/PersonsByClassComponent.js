import React from "react";
import { connect } from "react-redux";
import personsActions from "../redux/personsAction";

class PersonsByClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPerson: "",
    };
  }

  // eraseAllPersons() {
  //   personsActions.eraseAllPersons();
  // }

  // resetPersons() {
  //   personsActions.resetPersons();
  // }

  handleAddNewPerson(newPerson) {
    personsActions.addNewPerson(newPerson);
    console.log(newPerson);
  }

  render() {
    const { persons, eraseAllPersons, resetPersons } = this.props;
    return (
      <>
        <h1>Persons By Class Component </h1>
        <button onClick={eraseAllPersons}>Erase All persons</button>
        <br />
        <button onClick={resetPersons}>Reset to initial persons list</button>
        <br />
        <input
          onChange={(e) => {
            this.setState({ newPerson: e.target.value });
          }}
        />
        <button onClick={this.handleAddNewPerson(this.state.newPerson)}>
          Register new persons
        </button>
        <br />
        {persons.map((person) => {
          return <div>{person}</div>;
        })}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    persons: state.persons,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    eraseAllPersons: function () {
      return dispatch(personsActions.eraseAllPersons());
    },
    resetPersons: function () {
      return dispatch(personsActions.resetPersons());
    },
    handleAddNewPerson: function (newPerson) {
      return dispatch(personsActions.addNewPerson(newPerson));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonsByClassComponent);
