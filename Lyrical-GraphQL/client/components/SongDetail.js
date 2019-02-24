import React, { Component } from 'react';

class SongDetail extends Component {
  render() {
    console.log(this.props.id);
    console.log(42);
    return (
      <div>
        <h3>Song Detail</h3>
      </div>
    );
  }
}

export default SongDetail;
