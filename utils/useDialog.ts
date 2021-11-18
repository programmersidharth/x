import { useProcesses } from "contexts/process";

type Dialog = {
  openDialog: () => void;
};

const useDialog = (): Dialog => {
  const { open } = useProcesses();

  return {
    openDialog: () => {
      open("Dialog", "");
    },
  };
};

export default useDialog;
