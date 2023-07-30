import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';

// Story for List component
storiesOf('List', module)
  .add('Default', () => (
    <List
      rows={[
        {
          "&id": "SE|20221104|179|9:1:NEWO",
          "executionDetails": {
            "buySellIndicator": "Buy",
            "orderStatus": "Completed"
          },
          "orderSubmitted": "2022-11-04T15:29:00Z",
          "bestExecutionData": {
            "orderVolume": {
              "USD": 100,
              "GBP": 80,
              "JPY": 11000,
              "EUR": 90
            }
          },
          "timestamps": {
            "orderReceived": "2022-11-04T15:29:00Z"
          }
        },
        // you can add more sample 
      ]}
      selectedCurrency="USD"
      onOrderSelect={(selectedOrderId) => console.log("Selected Order ID:", selectedOrderId)}
    />
  ));
