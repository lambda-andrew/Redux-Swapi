import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { CharacterList } from "../components";
import { getCharacters } from '../actions/index'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props)
    this.props.getCharacters()
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


const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
})

export default connect( mapStateToProps,{ getCharacters } )(CharacterListView);
