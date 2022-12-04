import React from "react";
import { connect } from "react-redux";
import * as types from "../../store/types";
import axios from "axios";

import { FormStyled } from "./form.style";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      alert: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getShortLink = this.getShortLink.bind(this);
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value, alert: null });
  };

  handleClick = () => {
    if (this.state.text.replace(/ /g, "") === "") {
      this.setState({ alert: "Please add a Link" });
    } else {
      this.getShortLink(this.state.text);
    }
  };

  getShortLink = async (url) => {
    let result = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
    console.log(result);
    let shortLink = result.data.result;
    console.log(shortLink);
    this.props.dispatch({ type: types.ADD_LINK, payload: shortLink });
  };

  render() {
    return (
      <FormStyled alert={this.state.alert}>
        <div className="content-form">
          <input
            className="input-link"
            name="input-link"
            placeholder="Shorten a link here"
            value={this.state.text}
            onChange={this.handleChange}
          />
          {this.state.alert && <div className="alert">{this.state.alert}</div>}

          <div className="btn-shorten" onClick={this.handleClick}>
            Shorten it!
          </div>
        </div>
      </FormStyled>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shortLinks: state.shortLinks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
