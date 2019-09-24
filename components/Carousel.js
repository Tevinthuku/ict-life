import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import ShoppingCart from "@material-ui/icons/ShoppingCartOutlined";
import DeleteForever from "@material-ui/icons/DeleteForeverOutlined";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CardHeader from "@material-ui/core/CardHeader";
import data from "../data/inventory.json";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const steps = data.products.map(product => ({
  label: product.name,
  imgPath: product.image_url
}));

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 350,
    flexGrow: 1,
    margin: "auto"
  },
  header: {
    width: "100%",
    display: "flex",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 300,
    display: "block",
    overflow: "hidden",
    width: "100%"
  },
  cardheader: {
    width: "100%"
  },
  buttonAlignment: {
    display: "flex"
  }
}));

function SwipeableTextMobileStepper({
  currentlySelectedItems,
  addNewSelectedItem,
  removeSelectedItem
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  const addNewItem = itemname => {
    addNewSelectedItem(itemname);
  };

  const removeItem = itemname => {
    removeSelectedItem(itemname);
  };

  const toggleAddingAndRemoving = itemname => {
    return currentlySelectedItems.includes(itemname)
      ? removeItem(itemname)
      : addNewItem(itemname);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {steps[activeStep].label[0]}
            </Avatar>
          }
          action={
            <Button
              onClick={() => toggleAddingAndRemoving(steps[activeStep].label)}
              aria-label="settings"
            >
              {currentlySelectedItems.includes(steps[activeStep].label) ? (
                <div className={classes.buttonAlignment}>
                  Remove item
                  <DeleteForever />
                </div>
              ) : (
                <div className={classes.buttonAlignment}>
                  Add item
                  <ShoppingCart />
                </div>
              )}
            </Button>
          }
          title={steps[activeStep].label}
          className={classes.cardheader}
        />
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        interval={4000}
        enableMouseEvents
      >
        {steps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
