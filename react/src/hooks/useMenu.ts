import { MenuProps, PopoverOrigin } from "@mui/material";
import { useState } from "react";

type SetAnchorEl = React.Dispatch<React.SetStateAction<HTMLElement | null>>;

export const useMenu = (): MenuProps & { setAnchorEl: SetAnchorEl } => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const anchorOrigin: PopoverOrigin = {
    vertical: "bottom",
    horizontal: "left",
  };
  const transformOrigin: PopoverOrigin = {
    vertical: "top",
    horizontal: "right",
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return {
    anchorOrigin,
    transformOrigin,
    anchorEl,
    open,
    onClose,
    setAnchorEl,
  };
};
