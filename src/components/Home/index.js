import React, { Component } from 'react';
import Typed from 'typed.js';

import Enrick from '../../assets/enrick.jpg';

import { Container } from './styles';

export default class Home extends Component {
  componentDidMount() {
    const options = {
      strings: ['Oi, eu sou Enrick!'],
      typeSpeed: 50,
      showCursor: false,
    };

    const second = {
      strings: ['Desenvolvedor Mobile e Web.'],
      typeSpeed: 50,
      startDelay: 2300,
      showCursor: false,
    };

    const third = {
      strings: ['Trabalho com React Native, React e NodeJs.'],
      typeSpeed: 50,
      startDelay: 4500,
      showCursor: false,
    };

    this.typed = new Typed(this.el, options);
    this.typed = new Typed(this.ol, second);
    this.typed = new Typed(this.tl, third);
  }

  render() {
    return (
      <>
        <Container>
          <div>
            <span
              ref={el => {
                this.el = el;
              }}
            />
            <br />
            <br />
            <br />
            <span
              ref={ol => {
                this.ol = ol;
              }}
            />
            <br />
            <br />
            <br />
            <span
              ref={tl => {
                this.tl = tl;
              }}
            />
            <br />
          </div>

          <img src={Enrick} alt="" />
          {/* <Arrow /> */}
        </Container>
      </>
    );
  }
}
