import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getPeople} from "../actions";
import Loader from 'react-loader-spinner';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    console.log(this.props)
    this.props.getPeople();
  }

  fetchPeople = e => {
    e.preventDefault();
    this.props.getPeople();
  }

  render() {
    console.log(this.props)
    if (this.props.characters.length === 0) {
      return <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
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
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching
})


const mapActionsToProps = {
  getPeople
}

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(CharacterListView);
