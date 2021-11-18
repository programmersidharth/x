import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { useProcesses } from "contexts/process";
import { useEffect } from "react";
import styled from "styled-components";
import Button from "styles/common/Button";

const StyledDialog = styled.div`
  h1 {
    display: flex;
    width: 100%;
    height: 40px;
    padding-left: 22px;
    background: linear-gradient(
      to right,
      rgb(220, 229, 244),
      rgb(155, 192, 227),
      rgb(0, 43, 85)
    );
    font-size: 15px;
    font-weight: 400;
    place-items: center;
  }

  nav {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 41px;
    box-sizing: content-box;
    padding-bottom: 1px;
    border-top: 1px solid rgb(223, 223, 223);
    background-color: rgb(240, 240, 240);
    place-items: center;

    ${Button} {
      position: absolute;
      right: 23px;
      width: 73px;
      height: 23px;
      padding-bottom: 1px;
      border: 1px solid rgb(173, 173, 173);
      background-color: rgb(225, 225, 225);
      font-size: 12px;
    }
  }
`;

const Dialog = ({ id }: ComponentProcessProps): JSX.Element => {
  const { title } = useProcesses();

  useEffect(() => {
    title(id, "Copying...");
  }, [id, title]);

  return (
    <StyledDialog>
      <h1>Copying </h1>
      <nav>
        <Button disabled>Cancel</Button>
      </nav>
    </StyledDialog>
  );
};

export default Dialog;
