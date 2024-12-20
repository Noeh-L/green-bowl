/* eslint-disable no-unused-vars */
import styled from "styled-components";
import AdminTabs from "./AdminTabs.jsx";
import AdminPanel from "./AdminPanel/AdminPanel.jsx";
import { useOrderContext } from "../../../../../context/OrderPageContext";

function Admin() {
  const { isPanelAdminOpen } = useOrderContext();

  return (
    <AdminStyled>
      <AdminTabs />
      {isPanelAdminOpen && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 2;
  width: 100%;
  flex-direction: column;
  filter: drop-shadow(0 0 10px rgba(0 0 0 / 0.4));
`;

export default Admin;
