import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import source from './README.md';

class Readme extends Component {

  state = {
    about: null,
  }
  getSource(){
    return this.props.source
  }
  componentDidMount() {
    fetch(source)
      .then(res => res.text())
      .then(about => this.setState((state) => ({ ...state, about})))
      .catch((err) => console.error(err));
  }

  render() {
    const {about} = {...this.state};
    return (
      <>
          <Helmet title="Contact" />
         <div style={{'marginLeft':'50px'}}>
          <article className="post" id="about">
              <header>
                <div className="title">
                  <h2><Link to="/about">About Me</Link></h2>
                  <p>(in about {this.count} words)</p>
                </div>
              </header>
              <ReactMarkdown
                source={about}
                renderers={{
                  Link: this.LinkRenderer,
                }}
                escapeHtml={false}
              />
            </article>
         </div>
      </>
    )
  }
}

export default Readme;
