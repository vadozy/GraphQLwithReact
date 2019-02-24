import React, { Component } from 'react';

// graphql-tag is from apollo-client
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { Link, hashHistory } from 'react-router';

import query from '../queries/fetchSongs'


class SongCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  onSubmit(ev) {
    ev.preventDefault();
    //console.log(this.props);
    this.props.mutate({
      variables: { title: this.state.title },
      refetchQueries: [{ query }]
    })
      .then(() => hashHistory.push('/'))
      .catch(() => {});
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            onChange={ev => this.setState({title: ev.target.value})}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
