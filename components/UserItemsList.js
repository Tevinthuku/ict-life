import React from "react";
import Grid from "@material-ui/core/Grid";

import { useTrail, useTransition, animated } from "react-spring";

import data from "../data/inventory";

import MediaControlCard from "./SelectedItem";

export default ({ currentCurrency, currentlySelectedItems }) => {
  const items = data.products.filter(product =>
    currentlySelectedItems.includes(product.name)
  );
  const trail = useTrail(items.length, {
    top: 0,
    opacity: 1,
    from: { top: 40, opacity: 0 }
  });

  const animatedItems = useTransition(items, item => item.name, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    leave: { transform: "translate3d(0,-40px,0)" }
  });
  return (
    <div
      style={{
        margin: 30
      }}
    >
      <Grid container spacing={6}>
        {animatedItems.map(({ item, props, key }) => (
          <Grid key={key} item xs={12} sm={6} md={6}>
            <animated.div className="trails-text" style={props}>
              <MediaControlCard
                name={item.name}
                image={item.image_url}
                description={item.description}
                prices={item.prices}
                {...{ currentCurrency }}
              />
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
