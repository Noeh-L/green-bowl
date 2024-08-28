import styled from "styled-components";
import { theme } from "../../../../../../theme";

function ImagePreview({ product }) {
  return (
    <ImagePreviewStyled>
      {product.imageSource ? (
        <img src={product.imageSource} alt={product.title} />
      ) : (
        <div className="no-image">Aucune image</div>
      )}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 4;

  display: flex;
  align-items: center;
  justify-content: center;

  .no-image {
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.greySemiDark};
    width: 100%;
    height: 100%;
    font-size: ${theme.fonts.P0};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 65%;
    width: 65%;
    object-fit: contain;
  }
`;

export default ImagePreview;
