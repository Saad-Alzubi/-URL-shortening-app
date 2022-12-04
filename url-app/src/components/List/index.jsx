import React from "react";
import styled from "styled-components";
import LinkResult from "../Link/index";
import { connect } from "react-redux";

export const ResultListStyled = styled.div`
  display: grid;
  gap: 30px;
  margin: -50px 0px 100px 0px;
`;
class ResultList extends React.Component {
  render() {
    return (
      <ResultListStyled>
        {this.props.shortLinks.map((item) => (
          <LinkResult
            url={item.original_link}
            shortUrl={item.full_short_link}
            isCopy={false}
          />
        ))}
      </ResultListStyled>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
