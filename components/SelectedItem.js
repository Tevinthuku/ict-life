import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Spring } from "react-spring/renderProps.cjs";

import AnimatedText from "./AnimatedText";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundSize: "contain"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {}
}));

function mapCurrency(currency) {
  switch (currency) {
    case "Kenyan Shillings":
      return "KES";
    case "American Dollars":
      return "USD";
    case "Euros":
      return "EUR";
    case "Nigerian Naira":
      return "NGN";
    default:
      "KES";
  }
}

export default function RecipeReviewCard({
  name,
  image,
  description,
  prices,
  currentCurrency
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { currency, price } = prices.find(
    ({ currency }) => currency === mapCurrency(currentCurrency)
  );

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name[0]}
          </Avatar>
        }
        title={name}
        subheader={
          <Spring
            config={{ tension: 1, friction: 0.5, precision: 0.1 }}
            from={{ val: 0 }}
            to={{ val: `${currency} + " " + ${price}`.length }}
          >
            {props => (
              <div>
                <Typography variant="overline">
                  {`${currency} ${price}`.substring(0, props.val)}
                </Typography>
              </div>
            )}
          </Spring>
        }
      />
      <Tooltip
        title={`To view more content on the ${name} click on the downward facing arrow`}
        placement="top-start"
      >
        <CardMedia className={classes.media} image={image} />
      </Tooltip>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description.slice(0, 40) + " ..."}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Full Description:</Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
