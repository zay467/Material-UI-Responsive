import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: "250px",
    [theme.breakpoints.down("sm")]: {
      height: "150px",
    },
  },
}));

function Post() {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            perferendis culpa eaque, cum molestiae, beatae maiores corporis
            ducimus harum reprehenderit explicabo nobis numquam! Maxime
            blanditiis dicta amet ex, consequatur consequuntur? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Placeat officia itaque
            maiores voluptas illum laudantium dolor harum. Voluptas sit, quos
            accusamus praesentium amet eligendi ab sunt vel dignissimos iure
            maxime.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
