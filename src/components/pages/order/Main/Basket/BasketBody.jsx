import styled from "styled-components";

function BasketBody({ basket }) {
  return (
    <BasketBodyStyled>
      {basket.map((product) => (
        <div className="basket-card" key={product.id}>
          <img className="imageSource" src={product.imageSource} />
          <div className="title">{product.title}</div>
          <div className="price">{product.price}</div>
          <div className="quantity">{product.quantity}</div>
        </div>
      ))}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  .basket-card {
    border: 4px solid blue;
    width: 80%;

    img {
      width: 50px;
    }
  }
`;

export default BasketBody;
