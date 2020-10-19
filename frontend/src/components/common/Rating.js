import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Rating = ({ value, text }) => {
  const showRatingStar = ({ upperValue, lowerValue }) => {
    if (value >= upperValue) {
      return "fas fa-star";
    } else if (value >= lowerValue) {
      return "fas fa-star-half-alt";
    }
    return "far fa-star";
  };

  return (
    <>
      <StyledDiv className="rating">
        <StyledIcon
          className={showRatingStar({ upperValue: 1, lowerValue: 0.5 })}
        ></StyledIcon>
        <StyledIcon
          className={showRatingStar({ upperValue: 2, lowerValue: 1.5 })}
        ></StyledIcon>
        <StyledIcon
          className={showRatingStar({ upperValue: 3, lowerValue: 2.5 })}
        ></StyledIcon>
        <StyledIcon
          className={showRatingStar({ upperValue: 4, lowerValue: 3.5 })}
        ></StyledIcon>
        <StyledIcon
          className={showRatingStar({ upperValue: 5, lowerValue: 4.5 })}
        ></StyledIcon>
      </StyledDiv>
      <StyledText>{text && text}</StyledText>
    </>
  );
};

const StyledDiv = styled.div`
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

const StyledIcon = styled.i`
  color: #f8e825;
`;

const StyledText = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: 400;
`;

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Rating;
