import styled from "styled-components";
import DefaultPage from "./pages/DefaultPage";
import SuccessPage from "./pages/SuccessPage";
import { useState } from "react";

const App = () => {
  const [success, setSuccess] = useState(true);
  console.log("success : ", success);
  return (
    <AppPage>
      {success ? (
        <DefaultPage setSuccess={setSuccess} />
      ) : (
        <SuccessPage setSuccess={setSuccess} />
      )}
    </AppPage>
  );
};

export default App;

const AppPage = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 72px 0 72px 0;
    background-color: ${(props) => props.theme.colors["blue-700"]};
  }

  @media (min-width: 1024px) {
    padding: 220px 0;
    background-color: ${(props) => props.theme.colors["blue-700"]};
  }
`;
