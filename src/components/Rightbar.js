import { Container, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function Rightbar() {
  const classes = useStyle();
  return <Container className={classes.container}>Rightbar</Container>;
}

export default Rightbar;
