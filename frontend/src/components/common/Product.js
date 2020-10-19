import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import styled from "styled-components";

const Product = ({ product }) => {
  return (
    <StyledCard className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} varient="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <StyledText as="div">
            <strong>{product.name}</strong>
          </StyledText>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as="h3">{`₹${product.price}`}</Card.Text>
      </Card.Body>
    </StyledCard>
  );
};

const StyledText = styled(Card.Title)`
  &:hover {
    font-weight: 400;
    text-syle: none;
  }
`;

const StyledCard = styled(Card)`
  transition: all 0.4s;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
  }
`;

export default Product;
