import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { complaintData } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import {Typography} from "@mui/material";
import ChatView from "../chatview";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Complaints = () => {
  const theme = useTheme();
  const navigate=useNavigate()
  const colors = tokens(theme.palette.mode);
  const [selectedRow,setselectedRow] = useState(null);
  const handleRowClick = (params) => { 
    const complaintId = params.row.id;   
    if(params.row.status=="Open"){
    setselectedRow(params.row); // Update state with selected row data
  
    if (selectedRow) {
      navigate(`/complaints/${complaintId}`, { state: selectedRow }); 
      console.log(selectedRow)// Route to ChatView with state
  }
  }
};

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "product_id", headerName: "Product ID" },
    {
      field: "costumer_id" ,
      headerName: "Costumer ID",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "employee_id",
      headerName: "Employee ID",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "severity",
      headerName: "Severity",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "created",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "last_updated",
      headerName: "Last Updated",
      flex: 1,
    },
    {
      field: "resolved_at",
      headerName: "Resolved At",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },

  ];

  return (
    <Box m="20px">
      <Header
        title="Complaints"
        subtitle="List of Conplaints for Monitoring"
      />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={complaintData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={handleRowClick}
        />
      </Box>
    </Box>
  );
};

export default Complaints;
