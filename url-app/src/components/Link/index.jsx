import React from "react";

import { LinkResultStyled } from "./link.style";

class LinkResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCopy: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    let text = document.createElement("input");
    text.setAttribute("value", `${this.props.shortUrl}`);
    document.body.appendChild(text);
    text.select();
    document.execCommand("copy");
    document.body.removeChild(text);
    this.setState({ isCopy: true });
  };
  render() {
    return (
      <LinkResultStyled isCopy={this.state.isCopy}>
        <div className="url-header">{this.props.url}</div>
        <div className="url-content">
          <div className="short-url">{this.props.shortUrl}</div>
          <div className="content-btn-copied">
            <div className="btn-copied" onClick={this.handleClick}>
              {this.state.isCopy ? "Copied!" : "Copy"}
            </div>
          </div>
        </div>
      </LinkResultStyled>
    );
  }
}

export default LinkResult;
