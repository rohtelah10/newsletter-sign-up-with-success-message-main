import styled from "styled-components";
import Button from "../components/Button/Button";
import {
  TextPreset1,
  TextPreset2Regular,
} from "../components/Typography/Typography";
import Tick from "../assets/images/icon-success.svg";

interface SuccessProps {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuccessPage: React.FC<SuccessProps> = ({ setSuccess }) => {
  return (
    <Success>
      <Content>
        <TickImg src={Tick} alt="" />
        <TextPreset1 color="blue-800">Thanks for subscribing!</TextPreset1>
        <TextPreset2Regular color="blue-800">
          A confirmation email has been sent to <b>ash@loremcompany.com.</b>{" "}
          Please open it and click the button inside to confirm your
          subscription
        </TextPreset2Regular>
      </Content>
      <Button
        onClick={() => {
          setSuccess(true);
        }}
      >
        Dismiss Message
      </Button>
    </Success>
  );
};

export default SuccessPage;

const Success = styled.aside`
  background-color: ${(props) => props.theme.colors["white"]};

  margin: 130px 24px 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 623px;

  @media (min-width: 601px) {
    height: auto;
    margin: 0 132px;
    border-radius: 36px;
    padding: 64px;
    gap: 32px;
    justify-content: unset;
  }

  @media (min-width: 1024px) {
    width: 504px;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const TickImg = styled.img`
  height: 64px;
  width: 64px;
`;
