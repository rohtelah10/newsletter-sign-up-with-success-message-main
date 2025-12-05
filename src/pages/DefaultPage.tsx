import styled, { type DefaultTheme } from "styled-components";
import Button from "../components/Button/Button";
import {
  TextPreset1,
  TextPreset2Bold,
  TextPreset2Regular,
  TextPreset3,
} from "../components/Typography/Typography";
import MobileImg from "../assets/images/illustration-sign-up-mobile.svg";
import TabImg from "../assets/images/illustration-sign-up-tablet.svg";
import DesktopImg from "../assets/images/illustration-sign-up-desktop.svg";
import Tick from "../assets/images/icon-list.svg";
import { useEffect, useState } from "react";

interface DefaultProps {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const DefaultPage : React.FC<DefaultProps> = ( { setSuccess} ) => {
  const [email, setEmail] = useState("");
  const [screen, setScreen] = useState("mobile");
  const [ isValid, setIsValid ] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const emailInput = form.querySelector("input[type='email']") as HTMLInputElement;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

    if(emailRegex.test(emailInput.value) && form.reportValidity()) {
      setIsValid(true);
      setSuccess(false);
      console.log("Form Submitted");
    }
    else {
      setIsValid(false);
      console.log("Invalid input");
    }
  };

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 600px)");
    const tabQuery = window.matchMedia(
      "(min-width: 601px) and (max-width: 1024px)"
    );

    const handleScreenChange = () => {
      if (mobileQuery.matches) {
        setScreen("mobile");
      } else if (tabQuery.matches) {
        setScreen("tab");
      } else {
        setScreen("desktop");
      }
    };

    handleScreenChange();

    mobileQuery.addEventListener("change", handleScreenChange);
    tabQuery.addEventListener("change", handleScreenChange);

    return () => {
      mobileQuery.removeEventListener("change", handleScreenChange);
      tabQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  return (
    <PageContainer>
      {screen == "mobile" ? (
        <DisplayImg src={MobileImg} alt=""></DisplayImg>
      ) : screen === "tab" ? (
        <DisplayImg src={TabImg} alt=""></DisplayImg>
      ) : (
        <DisplayImg src={DesktopImg} alt=""></DisplayImg>
      )}
      <Content>
        <MainContent>
          <TextPreset1 color="blue-800">Stay updated!</TextPreset1>
          <TextPreset2Regular color="blue-800">
            Join 60,000+ product managers receiving monthly updates on:
          </TextPreset2Regular>

          <CheckBox>
            <KeyPoint>
              <TickImg src={Tick} alt=""></TickImg>
              <TextPreset2Regular color="blue-800">
                Product discovery and building what matters
              </TextPreset2Regular>
            </KeyPoint>
            <KeyPoint>
              <TickImg src={Tick} alt=""></TickImg>
              <TextPreset2Regular color="blue-800">
                Measuring to ensure updates are a success
              </TextPreset2Regular>
            </KeyPoint>
            <KeyPoint>
              <TickImg src={Tick} alt=""></TickImg>
              <TextPreset2Regular color="blue-800">
                And much more!
              </TextPreset2Regular>
            </KeyPoint>
          </CheckBox>
        </MainContent>

        <EmailBox onSubmit={handleSubmit} noValidate>
          <EmailContainer>
            <div style ={{ display: 'flex', justifyContent: 'space-between'}}>

            <TextPreset3 color="blue-800">Email address</TextPreset3>
            { !isValid && <TextPreset3 color="red">Valid email required</TextPreset3>}
            </div>
            <TextPreset2Bold>
              <EmailInput
                type="email"
                placeholder="email@company.com"
                value={email}
                onChange={(e) => {setEmail(e.target.value); setIsValid(true);}}
                isValid = {isValid}
                required
              ></EmailInput>
            </TextPreset2Bold>
          </EmailContainer>

          {!email ? <Button>Subscribe to monthly newsletter</Button> : <Button>Subscribe to monthly newsletter</Button> }
        </EmailBox>
      </Content>
    </PageContainer>
  );
};

export default DefaultPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors["white"]};

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 40px;
    border-radius: 36px;
  }
  
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    border-radius: 32px;
    padding: 32px;
  }
`;

const DisplayImg = styled.img`
  width: 100%;

  @media (min-width: 601px) and (max-width: 1024px) {
    width: 528px;
    height: 359px;
  }
  
  @media (min-width: 1024px) {
    width: 400px;
    height: 593px;
    margin-left: 64px;
  }
`;

const Content = styled.main`
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  
  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 0;
    padding-top: 40px; 
  }

  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CheckBox = styled.summary`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const KeyPoint = styled.div`
  display: flex;
  gap: 16px;
`;

const TickImg = styled.img`
  width: 21px;
  height: 21px;
`;

const EmailBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const EmailContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EmailInput = styled.input<{ isValid: boolean, color?: keyof DefaultTheme["colors"] }>`
  width: 100%;
  padding: 16px 24px;
  border-radius: 8px;
  border: 2px solid #000;

  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0px;

  color: ${(props) => props.isValid ? props.theme.colors["blue-800"] : props.theme.colors["red"]};

  background-color: ${ (props) => props.isValid ? props.theme.colors["white"] : props.theme.colors["fade-red"]};


  outline: none;

  &:invalid {
    /* border: none; */
    border-color : ${ (props) => !(props.isValid) && props.theme.colors["red"] };
  }

  &:invalid:focus {
    /* border: none; */
    border-color : ${ (props) => !(props.isValid) && props.theme.colors["red"] };
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors["grey"]};  
  }
`;
