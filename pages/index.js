import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Carousel from "../components/Carousel";
import AnimatedText from "../components/AnimatedText";
import UserSelectedItems from "../components/UserItemsList";
import Layout from "../components/Layout";
import CurrencySelector from "../components/CurrencySelector";
import selectedItems from "../data/selecteditems";

import {
  getCurrencyFromLocalStorage,
  setCurrencyToLocalStorage
} from "../utils/pricing";

export default function Index() {
  const [currentCurrency, setCurrentCurrency] = useState(
    getCurrencyFromLocalStorage()
  );

  const [currentlySelectedItems, setSelectedItems] = useState(
    selectedItems.items
  );

  function handleCurrencyChange(currency) {
    setCurrencyToLocalStorage(currency);
    setCurrentCurrency(currency);
  }

  function addNewSelectedItem(itemname) {
    setSelectedItems([...currentlySelectedItems, itemname]);
  }

  function removeSelectedItem(itemname) {
    setSelectedItems(currentlySelectedItems.filter(item => item !== itemname));
  }

  return (
    <Layout>
      <Container maxWidth="md">
        <Box my={4}>
          <div
            style={{
              minHeight: 130
            }}
          >
            <AnimatedText
              text={`Welcome to Amazin, we have all you need, check out our list of
            items below`}
            />
          </div>
          <Carousel
            {...{
              currentlySelectedItems,
              addNewSelectedItem,
              removeSelectedItem
            }}
          />
          <Typography
            style={{
              fontSize: 20
            }}
            variant="overline"
          >
            My Selected Items
          </Typography>
          <UserSelectedItems {...{ currentCurrency, currentlySelectedItems }} />
          <CurrencySelector
            currentCurrency={currentCurrency}
            setCurrency={handleCurrencyChange}
          />
        </Box>
      </Container>
    </Layout>
  );
}
