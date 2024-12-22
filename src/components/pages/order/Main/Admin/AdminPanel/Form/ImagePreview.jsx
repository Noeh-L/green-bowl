import styled from "styled-components";
import { theme } from "../../../../../../../theme";

function ImagePreview({ product }) {
  return (
    <ImagePreviewStyled>
      {product.imageSource ? (
        <div className="image-wrapper">
          <img src={product.imageSource} alt={product.title} />
        </div>
      ) : (
        <div className="no-image">Aucune image</div>
      )}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  grid-area: 1/1/2/2;

  display: flex;
  align-items: center;
  justify-content: center;

  .image-wrapper {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

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
`;

export default ImagePreview;
