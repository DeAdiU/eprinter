import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { tokens } from "../../theme";
import ArticleIcon from '@mui/icons-material/Article';
import Header from "../../components/Header";
import FeedIcon from '@mui/icons-material/Feed';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import StatBox from "../../components/StatBox";
import axios from 'axios'
import PrintView from "./PrintView";
import {Button} from "@mui/material";
const SURL = "http://127.0.0.1:8000/"

const Dashboard = () => {
  const theme = useTheme();
  const [studentList, setStudentList] = useState([]);
  const [professorList,setProfessorList]=useState([]);

  const colors = tokens(theme.palette.mode);
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
      setProfessorList(responseP.data)
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
            title={studentList.length+professorList.length}
            subtitle="Total number of Requests"
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
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={professorList.length}
            subtitle="Number of Professor Requests"
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
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={studentList.length}
            subtitle="Number of Student Requests"
            increase={'+'+100+'%'}
            icon={
              <FactCheckIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
              <Button onClick={handleSubmit} variant="contained" color="secondary">Refresh</Button>
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
          {studentList.filter(student => student.status==="UPLOADED"||student.status==="IN PRINTING").map((complain, i) => (
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
                  {complain.Name}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{complain.status}</Box>
              <PrintView id={complain.id}/>
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
              Professor
            </Typography>
          </Box>
          {professorList.filter(professor => professor.status==="UPLOADED"||professor.status==="IN PRINTING").map((solve, i) => (
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
                  {solve.id}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {solve.Name}
                </Typography>
              </Box>
              <Box
              >
                {solve.status}
              </Box>
              <PrintView id={solve.id}/>

            </Box>
          ))}
        </Box>
        
      </Box>
    </Box>
  );
};

export default Dashboard;
