import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import shreeyaImage from "./images/shreeya.jpg";
import adityaImage from "./images/aditya.jpeg";
import samyakImage from "./images/samyak.jpeg";
import aryansImage from "./images/aryans.jpg";
import aryanbImage from "./images/aryanb.jpg";

const AboutUs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        padding: "50px",
      }}
      id="aboutMe"
    >
      {/* Title */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{
          fontFamily: "Myraid Pro Regular",
          fontWeight: "bold",
          marginBottom: "25px",
        }}
      >
        OUR TEAM
      </Typography>

      {/* First row with 3 cards */}
      <div className="mx-auto grid md:grid-cols-3 gap-8 lg:grid-flow-cols-3 ">
      <Card
          sx={{
            width: 275,
            margin: "0 15px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.15)" },
            backgroundColor: "#F5F5F5",
            backgroundImage: `url(${adityaImage})`,
            backgroundSize: "cover",
          }}
        >
          <CardContent style={{ padding: "0 10 10 10px" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
              style={{
                fontWeight: "bold",
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1",
              }}
            >
              Aditya Uttarwar
            </Typography>
            {/* <Typography variant="body2" color="text.secondary" align="center">
              Content
            </Typography> */}
          </CardContent>
          <CardActions
            style={{ justifyContent: "flex-end", margin: "0 3px 3px 0" }}
          >
            <div>
              <a href="https://www.linkedin.com/in/aditya-uttarwar-ab7795245/" target="_blank">
                <FaLinkedin
                  size={30}
                  style={{ backgroundColor: "white", color: "#0077b5" }}
                />
              </a>
              <a href="https://github.com/DeAdiU" target="_blank">
                <FaGithubSquare
                  size={30}
                  style={{ backgroundColor: "white", marginTop: "5px" }}
                />
              </a>
            </div>
          </CardActions>
        </Card>

        <Card
          sx={{
            width: 275,
            margin: "0 15px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.15)" },
            backgroundColor: "#F5F5F5",
            backgroundImage: `url(${aryansImage})`,
            backgroundSize: "cover",
          }}
        >
          <CardContent style={{ padding: "0 10 10 10px" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
              style={{
                fontWeight: "bold",
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1",
              }}
            >
              Aryan Sivanandan
            </Typography>
            {/* <Typography variant="body2" color="text.secondary" align="center">
              Content
            </Typography> */}
          </CardContent>
          <CardActions
            style={{ justifyContent: "flex-end", margin: "0 3px 3px 0" }}
          >
            <div>
              <a href="" target="_blank">
                <FaLinkedin
                  size={30}
                  style={{ backgroundColor: "white", color: "#0077b5" }}
                />
              </a>
              <a href="https://github.com/AryanSivanandan" target="_blank">
                <FaGithubSquare
                  size={30}
                  style={{ backgroundColor: "white", marginTop: "5px" }}
                />
              </a>
            </div>
          </CardActions>
        </Card>

        <Card
          sx={{
            width: 275,
            height: 445,
            margin: "0 15px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.15)" },
            backgroundColor: "#F5F5F5",
            backgroundImage: `url(${aryanbImage})`,
            backgroundSize:"cover",
          }}
        >
          
          <CardContent style={{ padding: "0 10 10 10px" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
              style={{
                fontWeight: "bold",
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1",
              }}
            >
              Aryan Babre
            </Typography>
            {/* <Typography variant="body2" color="text.secondary" align="center">
              Content
            </Typography> */}
          </CardContent>
          <CardActions
            style={{ justifyContent: "flex-end", margin: "0 3px 3px 0" }}
          >
            <div>
              <a href="https://www.linkedin.com/in/aryan-babare-49bb24298/" target="_blank">
                <FaLinkedin
                  size={30}
                  style={{ backgroundColor: "white", color: "#0077b5" }}
                />
              </a>
              <a href="https://github.com/willgaxXx" target="_blank">
                <FaGithubSquare
                  size={30}
                  style={{ backgroundColor: "white", marginTop: "5px" }}
                />
              </a>
            </div>
          </CardActions>
        </Card>

        
        <Card
          sx={{
            width: 275,
            height: 445,
            margin: "0 15px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.15)" },
            backgroundColor: "#F5F5F5",
            backgroundImage: `url(${samyakImage})`,
            backgroundSize:"cover",
          }}
        >
          
          <CardContent style={{ padding: "0 10 10 10px" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
              style={{
                fontWeight: "bold",
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1",
              }}
            >
              Samyak Bora
            </Typography>
            {/* <Typography variant="body2" color="text.secondary" align="center">
              Content
            </Typography> */}
          </CardContent>
          <CardActions
            style={{ justifyContent: "flex-end", margin: "0 3px 3px 0" }}
          >
            <div>
              <a href="https://www.linkedin.com/in/samyak-kiran-bora-37b755212/" target="_blank">
                <FaLinkedin
                  size={30}
                  style={{ backgroundColor: "white", color: "#0077b5" }}
                />
              </a>
              <a href="https://github.com/" target="_blank">
                <FaGithubSquare
                  size={30}
                  style={{ backgroundColor: "white", marginTop: "5px" }}
                />
              </a>
            </div>
          </CardActions>
        </Card>

        <Card
          sx={{
            width: 275,
            height: 445,
            margin: "0 15px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.15)" },
            backgroundColor: "#F5F5F5",
            backgroundImage: `url(${shreeyaImage})`,
            backgroundSize:"cover",
          }}
        >
          
          <CardContent style={{ padding: "0 10 10 10px" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
              style={{
                fontWeight: "bold",
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1",
              }}
            >
              Shreeya Daga
            </Typography>
            {/* <Typography variant="body2" color="text.secondary" align="center">
              Content
            </Typography> */}
          </CardContent>
          <CardActions
            style={{ justifyContent: "flex-end", margin: "0 3px 3px 0" }}
          >
            <div>
              <a href="https://www.linkedin.com/in/shreeya-daga-3a00921b5/" target="_blank">
                <FaLinkedin
                  size={30}
                  style={{ backgroundColor: "white", color: "#0077b5" }}
                />
              </a>
              <a href="https://github.com/ShreeyaDaga" target="_blank">
                <FaGithubSquare
                  size={30}
                  style={{ backgroundColor: "white", marginTop: "5px" }}
                />
              </a>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
