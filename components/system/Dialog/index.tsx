import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import { useProcesses } from "contexts/process";
import { useEffect } from "react";
import styled from "styled-components";
import Button from "styles/common/Button";

const StyledDialog = styled.div`
  h1 {
    background: linear-gradient(
      to right,
      rgb(220, 229, 244),
      rgb(155, 192, 227),
      rgb(0, 43, 85)
    );
    display: flex;
    font-size: 15px;
    font-weight: 400;
    height: 40px;
    padding-left: 22px;
    place-items: center;
    width: 100%;
  }

  nav {
    background-color: rgb(240, 240, 240);
    border-top: 1px solid rgb(223, 223, 223);
    bottom: 0;
    box-sizing: content-box;
    display: flex;
    height: 41px;
    padding-bottom: 1px;
    place-items: center;
    position: absolute;
    width: 100%;

    ${Button} {
      background-color: rgb(225, 225, 225);
      border: 1px solid rgb(173, 173, 173);
      font-size: 12px;
      height: 23px;
      padding-bottom: 1px;
      position: absolute;
      right: 23px;
      width: 73px;
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
