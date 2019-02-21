import React, { Component } from 'react';

// graphql-tag is from apollo-client
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { Link } from 'react-router';

import query from '../queries/fetchSongs'

class SongList extends Component {

  renderSongs() {
    const loading = <div>"Loading..."</div>;
    return this.props.data.loading ? loading : this.props.data.songs.map(song => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
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

export default graphql(query)(SongList);
