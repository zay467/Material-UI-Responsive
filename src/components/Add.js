import { Fab, makeStyles, Tooltip, Modal, Container } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    right: "20px",
    bottom: "20px",
  },
  container: {
    width: "500px",
    height: "500px",
    background: "white",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
}));

function Add() {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title="Add" onClick={() => setOpen(true)}>
        <Fab color="secondary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>My Modal</Container>
      </Modal>
    </>
  );
}

export default Add;
