import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, selectedCurrency }) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
          <ListHeaderCell>Order Volume / {selectedCurrency}</ListHeaderCell>
          <ListHeaderCell>Order Received</ListHeaderCell>
          {/* <ListHeaderCell>Order Staus</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell> */}
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => (
          <ListRow>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.orderSubmitted}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume.USD}</ListRowCell>
            <ListRowCell>{row.bestExecutionData.orderVolume[selectedCurrency]}</ListRowCell>
            <ListRowCell>{row.timestamps.orderReceived}</ListRowCell>
            {/* <ListRowCell>{row.timestamps.orderStatusUpdated}</ListRowCell>
            <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell> */}
          </ListRow>
        ))}
      </tbody>
    </table>
  );
};

export default List;
