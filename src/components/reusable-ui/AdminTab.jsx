import styled from "styled-components";
import { theme } from "../../theme";

function AdminTab({ Icon, label }) {
  return (
    <AdminTabStyled $isLabel={label}>
      {Icon && <Icon className="icon" />}
      <p className="title">{label}</p>
    </AdminTabStyled>
  );
}

const AdminTabStyled = styled.div`
  min-width: 60px;
  min-height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ isLabel }) => (isLabel ? theme.spacing.sm : 0)};

  background: ${theme.colors.white};
  color: ${theme.colors.greySemiDark};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
  border: 1px solid ${theme.colors.greyLight};
  padding: 10px 22px;
  cursor: pointer;

  .icon {
    font-size: ${theme.fonts.SM};
  }

  .title {
    font-size: ${theme.fonts.P0};
  }

  &:hover {
    position: relative;

    /* Make the border bottom disappear on hover */
    &::after {
      content: "";
      position: absolute;
      bottom: -1.8px;
      height: 1.8px;
      width: 100%;
      background: white;
    }

    .title {
      text-decoration: underline;
    }
  }
`;

export default AdminTab;
