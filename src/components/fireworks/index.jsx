import React, { PureComponent } from 'react';

export default class Fireworks extends PureComponent {
  async componentDidMount() {
    await import(
      /* webpackChunkName: "fireworks" */
      './activate'
    );
  }

  render() {
    return (
      <canvas /> // Necessary for the fireworks.js script.
    );
  }
}
