import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { complaintData } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import {Typography} from "@mui/material";
import ChatView from "../chatview";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SURL = "http://127.0.0.1:8000/"
const Complaints = () => {
  const theme = useTheme();
  const navigate=useNavigate()
  const colors = tokens(theme.palette.mode);
  const [selectedRow,setselectedRow] = useState(null);
  const [printList,setPrintList]=useState([])
  const handleRowClick = (params) => { 
    const complaintId = params.row.id;   
    if(params.row.status=="Open"){
    setselectedRow(params.row); // Update state with selected row data
  
    if (selectedRow) {
      navigate(`/${complaintId}`, { state: selectedRow }); 
      console.log(selectedRow)// Route to ChatView with state
  }
  }
}
  useEffect(() => {
    handleSubmit({ preventDefault: () => { } });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!URL) {
        console.log('URL is not defined');
        return;
      }

      const config = {
        headers: { 
          'Content-Type': 'application/json',  
        },
      };

      const response = await axios.get(SURL, config);

      if (!response?.data) {
        console.log('Response data is empty');
        return;
      }
      console.log(response.data)
      setPrintList(response.data)
      console.log(printList)
    } catch (err) {
      console.log(err);
    }

};

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "Name", headerName: "Name", flex: 1},
    {
      field: "regNo" ,
      headerName: "Registration Number",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,

    }, 
    {
      field: "created_at",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "last_updated_at",
      headerName: "Last Updated",
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
          rows={printList}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={handleRowClick}
        />
      </Box>
    </Box>
  );
};

export default Complaints;
