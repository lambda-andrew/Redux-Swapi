import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { CharacterList } from "../components";
import { getCharacters } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters()
  }

  render() {
    if (this.props.fetching) {
      <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  characters: state.characters,
  fetching: state.fetching,
})

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
