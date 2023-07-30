
import { useState } from "react";
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {

  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  const totalOrders = mockData.results.length;

 
  const timestampsMap = {};
  timestamps.results.forEach((item) => {
    const id = item["&id"];
    timestampsMap[id] = item.timestamps;
  });

  const combinedData = mockData.results.map((mockItem) => {
    const id = mockItem["&id"];
    return {
      ...mockItem,
      timestamps: timestampsMap[id] || {},
    };
  });

  const handleOrderSelection = (selectedOrderId) => {
    const selectedOrder = combinedData.find(
      (item) => item["&id"] === selectedOrderId
    );
    setSelectedOrderDetails(selectedOrder);
    setSelectedOrderTimeStamps(selectedOrder.timestamps);
  };


  const handleSearch = (searchValue) => {
    setSearchText(searchValue);
  };

  const filteredData = combinedData.filter((item) => {
    return item["&id"].toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={`${totalOrders} orders`} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={filteredData} selectedCurrency={currency} onOrderSelect={handleOrderSelection} />
      </div>
    </div>
  );
};

export default Dashboard;














