import React from "react";
import { connect } from "react-redux";
import { getData } from '../actions'
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getData();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return(
        <div>
          <h2>Gathering Data...</h2>
        </div>
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
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
});

export default connect(
  mapStateToProps,
  {
    getData
  }
)(CharacterListView);
