import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getPeople} from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getPeople();
    // call our action
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <h1>Data is being fetched!</h1>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.characters,
  error: state.error,
  fetching: state.fetching
})

const mapActionsToProps = () => {
  getPeople
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(CharacterListView);
