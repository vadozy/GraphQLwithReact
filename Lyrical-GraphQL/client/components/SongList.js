import React, { Component } from 'react';

// graphql-tag is from apollo-client
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { Link } from 'react-router';

import query from '../queries/fetchSongs'

class SongList extends Component {

  renderSongs() {
    const loading = <div>"Loading..."</div>;
    return this.props.data.loading ? loading : this.props.data.songs.map(({id, title}) => (
      <li key={id} className="collection-item">
        <Link to={`songs/${id}`}>
          {title}
        </Link>
        <i
          className="material-icons"
          onClick={() => this.onSongDelete(id)} >
            delete
        </i>
      </li>
    ));
  }

  onSongDelete(id) {

    this.props.mutate({ variables: { id } })
      .then(() => this.props.data.refetch());

    // Next (similar to code in SongCreate.js) also works nicely
    /*
    this.props.mutate({
      variables: { id },
      refetchQueries: [{ query }]
    });
    */
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
        <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(SongList)
);
