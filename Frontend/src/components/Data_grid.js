import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  TablePagination,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";
import Delete from "./modal/Delete";
import "../css/styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiBox-root-17": {
      padding: 0,
    },
    "& .MuiSvgIcon-root": {
      fill: "white",
    },
    "& .MuiTypography-colorInherit": {
      color: "white",
    },
    border: 0,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#666666",
    color: "white",
  },
}));

const UserTable = ({ searchQuery }) => {
  const [pageSize, setPageSize] = useState(5);
  const [users, setUsers] = useState([]);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState({
    customerOrderId: "",
    amountInUSD: "",
    distributionChannel: "",
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8090/final_1/FetchAllUsers"
      );
      // Add unique ID field to each user object
      const usersWithId = response.data.map((user, index) => ({
        ...user,
        id: index + 1,
      }));
      setUsers(usersWithId);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async () => {
    if (selectedRows.length === 0) {
      console.log("No rows selected for deletion");
      return;
    }

    try {
      const customerOrderIds = selectedRows.map((row) => row.CUSTOMER_ORDER_ID);
      const customerOrderIdsString = customerOrderIds.join(",");
      console.log({ selectedRows, customerOrderIds });
      const response = await axios.post(
        "http://localhost:8090/final_1/DeleteUser?CUSTOMER_ORDER_ID=" +
          customerOrderIdsString
      );
      // Handle success case
    } catch (error) {
      console.error(error);
      // Handle error case
    }

    setDeleteOpen(false);
  };

  const handleDeleteClick = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };

  const handleSelectionModelChange = (selectionModel) => {
    setSelectedRows(
      selectionModel.map((selectedRowId) =>
        users.find((row) => row.id === selectedRowId)
      )
    );
  };

  const handleRefreshData = () => {
    fetchData();
  };

  const handleEdit = () => {
    if (selectedRows.length === 1) {
      const selectedRow = selectedRows[0];
      const rowData = users.find((row) => row.id === selectedRow.id);
      setEditData(rowData);
      console.log({editData})
      setEditOpen(true);
    }
  };

  const handlePredict = () => {
    // Perform the predict operation
    // ...
  };

  const columns = [
    { field: "id", headerName: "SL No", width: 110 },
    { field: "CUSTOMER_ORDER_ID", headerName: "Customer Order Id", width: 170 },
    { field: "SALES_ORG", headerName: "Sales Org", width: 130 },
    {
      field: "DISTRIBUTION_CHANNEL",
      headerName: "Distribution Channel",
      width: 200,
    },
    { field: "COMPANY_CODE", headerName: "Company Code", width: 150 },
    {
      field: "ORDER_CREATION_DATE",
      headerName: "Order Creation Date",
      width: 200,
    },
    { field: "ORDER_CURRENCY", headerName: "Order Currency", width: 150 },
    { field: "CUSTOMER_NUMBER", headerName: "Customer Number", width: 160 },
    { field: "AMOUNT_IN_USD", headerName: "Amount in USD", width: 180 },
    // { field: 'orderAmount', headerName: 'Order Amount', width: 150 },
  ];

  const handlePageSizeChange = (params) => {
    setPageSize(params.pageSize); // Update the current page size
  };

  const classes = useStyles();

  const Footer = () => (
    <div
      className="MuiDataGrid-footerContainer"
      style={{ background: "#666666", width: "50%" }}
    >
      <div>
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleRefreshData}
        >
          REFRESH
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleEdit}
        >
          EDIT
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleDeleteClick}
        >
          DELETE
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          onClick={handlePredict}
        >
          PREDICT
        </Button>
      </div>
    </div>
  );


  const handleEditSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8090/final_1/UpdateUser",
        editData
      );
      // Handle success case
    } catch (error) {
      console.error(error);
      // Handle error case
    }
  };


  return (
    <div className="table-container">
      <DataGrid
        rows={users}
        columns={columns}
        checkboxSelection
        onSelectionModelChange={handleSelectionModelChange}
        pageSize={pageSize}
        autoHeight
        rowsPerPageOptions={[5, 10, 20, 50, 100]}
        disableSelectionOnClick
        className={classes.root}
        onPageSizeChange={handlePageSizeChange}
      />
      <Footer />
      <Delete
        open={deleteOpen}
        onClose={handleDeleteClose}
        onDelete={handleDelete}
      />
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Data</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              label="Customer Order Id"
              value={editData.CUSTOMER_ORDER_ID}
              // disabled
              style={{ margin: "5px" }}
            />
            {/* Add other fields you want to edit */}
            <TextField
              label="Amount in USD"
              value={editData.AMOUNT_IN_USD}
              onChange={(e) =>
                setEditData((prevData) => ({
                  ...prevData,
                  AMOUNT_IN_USD: e.target.value,
                }))
              }
              style={{ margin: "5px" }}
            />
            <TextField
              label="Distribution Channel"
              value={editData.DISTRIBUTION_CHANNEL}
              onChange={(e) =>
                setEditData((prevData) => ({
                  ...prevData,
                  DISTRIBUTION_CHANNEL: e.target.value,
                }))
              }
              style={{ margin: "5px" }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button onClick={handleEditSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserTable;