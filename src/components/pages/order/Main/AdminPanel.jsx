import styled from "styled-components";

function AdminPanel() {
  return (
    <AdminPanelStyled>
      <div className="tabs"> </div>
      <div className="content"> </div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background: lightblue;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 295px;
  display: flex;
  flex-direction: column;

  .tabs {
    border: 3px solid blue;
    height: 45px;
  }

  .content {
    border: 3px solid red;
    border-radius: 0 0 15px 15px;
    flex: 1;
  }
`;

export default AdminPanel;
