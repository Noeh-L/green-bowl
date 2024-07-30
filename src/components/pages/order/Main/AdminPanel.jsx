import styled from "styled-components";

function AdminPanel() {
  return <AdminPanelStyled>ADMIN PANEL</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  background: lightblue;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 295px;
`;

export default AdminPanel;
