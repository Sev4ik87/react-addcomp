import React, { Component } from 'react';

export class InfoArticle extends Component {
  render() {
    const { title, content } = this.props;

    return (
      <article>
        <h2>{title}</h2>
        <p>{content}</p>
      </article>
    );
  }
}
