/* eslint-disable jsx-a11y/media-has-caption */

import React, { PureComponent } from 'react';
import background from './background.mp4';
import music from './music.mp3';

const code = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const keys = [];

export default class Miami extends PureComponent {
  constructor() {
    super();
    this.state = {
      render: false,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyPress);
  }

  /**
   * Handles the 'keydown' event.
   * @param {KeyboardEvent} e
   */
  onKeyPress = (e) => {
    if (e.key === 'Enter' && keys.slice(-10).join() === code.join()) {
      document.body.classList.add('miami');
      document.querySelector('audio').play();
      document.removeEventListener('keydown', this.onKeyPress);
    } else {
      keys.push(e.key);
      if (keys.length === Math.round(code.length / 2)) {
        this.setState({ render: true }); // get ready (render hidden)
      }
    }
  }

  render() {
    const { render } = this.state;

    if (!render) {
      return null;
    }

    return (
      <>
        <audio src={music} type="audio/mpeg" preload="auto" loop />
        <video autoPlay muted loop>
          <source src={background} type="video/mp4" />
        </video>
      </>
    );
  }
}
