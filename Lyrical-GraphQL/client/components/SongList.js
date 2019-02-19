import React, { Component } from 'react';

// graphql-tag is from apollo-client
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

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
      <ul className="collection">
        {this.renderSongs()}
      </ul>
    );
  }
}

const query = gql(`
  {
    songs {
      id
      title
    }
  }
`);

export default graphql(query)(SongList);
