import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { tokens } from "../../theme";
import ArticleIcon from '@mui/icons-material/Article';
import Header from "../../components/Header";
import FeedIcon from '@mui/icons-material/Feed';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import StatBox from "../../components/StatBox";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'
import {Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
const SURL = "http://127.0.0.1:8000/"
let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InNvaGFtNCIsImVtYWlsIjoiZW1wb3llZTJAZ21haWwuY29tIiwicm9sZSI6Ik1BTkFHRVIiLCJlbXBsb3llZV9pZCI6IjEyMzQ1Njc4OTYiLCJpYXQiOjE3MTI0MjQ3MjN9.sqq8n5xCdSvYcT-lR2AwaU6BldySg_i9I00uMCUg-pI"


const Dashboard = () => {
  const theme = useTheme();
  const [activeComplaints, setActiveComplaints] = useState([]);
  const [recentResolvedComplaints, setRecentResolvedComplaints] = useState([]);
  const navigate=useNavigate();
  const [studentList, setStudentList] = useState([]);
  const [professorList,setProfessorList]=useState([]);

  const colors = tokens(theme.palette.mode);
  const currencies = [
    {
      value: 'Active',
      label: 'Active',
    },
    {
      value: 'Sleep',
      label: 'Break',
    },
    {
      value: 'Inactive',
      label: 'Inactive',
    }, 
  ];
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

      const response = await axios.get(SURL+'student/', config);
      const responseP = await axios.get(SURL+'professor/', config);

      if (!response?.data) {
        console.log('Response data is empty');
        return;
      }
      console.log(response.data)
      setStudentList(response.data)
      setProfessorList(response.data)
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={activeComplaints.length+recentResolvedComplaints.length}
            subtitle="Total number of complaints"
            progress="1"
            increase={'+100%'}
            icon={
              <ArticleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title='100'
            subtitle="Number of Active Complaints"
            progress='0.5'
            increase='100'
            icon={
              <FeedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={recentResolvedComplaints.length}
            subtitle="Number of Resolved Complaints"
            progress={recentResolvedComplaints.length/(activeComplaints.length+recentResolvedComplaints.length)}
            increase='10'
            icon={
              <FactCheckIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
            <TextField
            id="outlined-select-currency"
            select
            label="Mode"
            defaultValue="Active"
            sx={{ color: colors.greenAccent[600], fontSize: "26px",padding:"auto",m:1,width:"275px" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value} sx={{ color: colors.greenAccent[600] }}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          height="600px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Student
            </Typography>
          </Box>
          {studentList.map((complain, i) => (
            <Box
              key={i}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
              cursor="pointer"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {complain.id}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {complain.name}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{complain.severity}</Box>
              <Button
                variant="contained"
                color='secondary'
                p="5px 10px"
                borderRadius="4px"
                onClick={() => {
                  navigate(`/${complain.id}`, { state: complain });
                }}
              >
                {complain.status}
              </Button>
            </Box>
          ))}
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          height="600px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recently Solved Complaints
            </Typography>
          </Box>
          {recentResolvedComplaints.map((solve, i) => (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {solve.title}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {solve.product_name}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{solve.resolution_time}</Box>
              <Box
              >
                {solve.status}
              </Box>
            </Box>
          ))}
        </Box>
        
      </Box>
    </Box>
  );
};

export default Dashboard;
