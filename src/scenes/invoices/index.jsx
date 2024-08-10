import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Import your Firebase configuration
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Function to fetch data from Firestore
    const fetchInvoices = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "inventory")); // Replace "invoices" with your collection name
        const invoicesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setInvoices(invoicesData);
      } catch (error) {
        console.error("Error fetching invoices: ", error);
      }
    };

    fetchInvoices();
  }, []);

  const columns = [
    { field: "product_name", headerName: "Product_name", flex: 1 },
    { field: "Manf_name", headerName: "Manf_name", flex: 1 },
    { field: "Product_id", headerName: "Product_id", flex: 1 },
    { field: "type", headerName: "type", flex: 1 },
    { field: "Quantity", headerName: "Quantity", flex: 1 },
    { field: "sell_price", headerName: "Sell_Price", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="INVENTORY" subtitle="List of Inventory items" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={invoices} columns={columns}  />
      </Box>
    </Box>
  );
};

export default Invoices;
