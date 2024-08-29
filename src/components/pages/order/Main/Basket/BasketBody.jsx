import styled from "styled-components";

function BasketBody({ basket }) {
  return (
    <BasketBodyStyled>
      <div>
        <img className="imageSource" src={basket[0].imageSource} />
        <div className="title">{basket[0].title}</div>
        <div className="price">{basket[0].price}</div>
        <div className="quantity">{basket[0].quantity}</div>
      </div>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  img {
    width: 50px;
  }
`;

export default BasketBody;
