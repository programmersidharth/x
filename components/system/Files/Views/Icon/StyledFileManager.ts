import type { StyledFileManagerProps } from "components/system/Files/Views";
import StyledWindow from "components/system/Window/StyledWindow";
import styled from "styled-components";
import ScrollBars from "styles/common/ScrollBars";

const StyledFileManager = styled.ol<StyledFileManagerProps>`
  ${ScrollBars(17)};

  column-gap: ${({ theme }) => theme.sizes.fileManager.columnGap};
  contain: strict;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${({ theme }) =>
    `repeat(auto-fill, ${theme.sizes.fileManager.gridEntryWidth})`};
  grid-template-rows: ${({ theme }) =>
    `repeat(auto-fill, ${theme.sizes.fileManager.gridEntryHeight})`};
  height: 100%;
  overflow: ${({ scrollable }) => (scrollable ? undefined : "hidden")};
  padding: ${({ theme }) => theme.sizes.fileManager.padding};
  pointer-events: ${({ selecting }) => (selecting ? "auto" : undefined)};
  row-gap: ${({ theme }) => theme.sizes.fileManager.rowGap};

  main > & {
    height: ${({ theme }) => `calc(100% - ${theme.sizes.taskbar.height})`};
    overflow: visible;
    padding-bottom: 21px;
  }

  ${StyledWindow} & {
    grid-auto-flow: row;
  }
`;

export default StyledFileManager;
