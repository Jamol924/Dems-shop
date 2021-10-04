import React from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => () => {
    enqueueSnackbar("Telifoningizga parol junatildi!", { variant });
  };

  return (
    <div>
        <Button onClick={handleClickVariant("success")}>button</Button>
    </div>
  );
}

export default function DirectionSnackbar() {
  return (
    <SnackbarProvider maxSnack={2}>
      <MyApp />
    </SnackbarProvider>
  );
}


