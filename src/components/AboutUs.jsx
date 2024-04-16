import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import shreeyaImage from "./images/shreeya.jpg";
import adityaImage from "./images/aditya.jpeg"
import samyakImage from "./images/samyak.jpeg"

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

    >
      {/* Title */}
      <Typography variant="h3" align="center" gutterBottom style={{fontFamily: 'Myraid Pro Regular', fontWeight:"bold", marginBottom:"20px"}}>
        OUR TEAM
      </Typography>

      {/* First row with 3 cards */}
      <div
        className="mx-auto grid md:grid-cols-3 gap-8 lg:grid-flow-cols-3 "
      >
        <Card
          sx={{
            width: 275,
            margin: "0 15px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.15)" },
            backgroundColor: '#F5F5F5',
            backgroundImage: `url(${adityaImage})`,
            backgroundSize: 'cover'
          }}
        >
          <CardContent style={{ padding: "0 10 10 10px" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
            >
              Aditya Uttarwar
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Content
            </Typography>
          </CardContent>
          <CardActions
            style={{ justifyContent: "flex-end", margin: "0 3px 3px 0" }}
          >
            <Button
              size="small"
              style={{
                backgroundColor: "#0077b5",
                color: "white",
                margin: "0 2px 0 2 px",
              }}
              href="https://www.linkedin.com/in/aditya-uttarwar-ab7795245/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            width: 275,
            margin: "0 15px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.15)" },
            backgroundColor: '#F5F5F5'
          }}
        >
          <CardMedia
            sx={{ height: 250 }}
            image="./images/8.jpg"
            title="green iguana"
          />
          <CardContent style={{ padding: "0 10 10 10px" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
            >
              Aryan Sivandan
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Content
            </Typography>
          </CardContent>
          <CardActions
            style={{ justifyContent: "flex-end", margin: "0 3px 3px 0" }}
          >
            <Button
              size="small"
              style={{
                backgroundColor: "#0077b5",
                color: "white",
                margin: "0 2px 0 2 px",
              }}
            >
              LinkedIn
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            width: 275,
            margin: "0 15px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.15)" },
            backgroundColor: '#F5F5F5'
          }}
        >
          <CardMedia
            sx={{ height: 250 }}
            image="./images/8.jpg"
            title="green iguana"
          />
          <CardContent style={{ padding: "0 10 10 10px" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
            >
              Aryan Babre
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Content
            </Typography>
          </CardContent>
          <CardActions
            style={{ justifyContent: "flex-end", margin: "0 3px 3px 0" }}
          >
            <Button
              size="small"
              style={{
                backgroundColor: "#0077b5",
                color: "white",
                margin: "0 2px 0 2 px",
              }}
              href="https://www.linkedin.com/in/aryan-babare-49bb24298/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            width: 275,
            height: 390,
            margin: "0 15px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.15)" },
            backgroundColor: '#F5F5F5',
            backgroundImage: `url(${samyakImage})`,
            backgroundSize: 'cover'
          }}
        >
          
          <CardContent style={{ padding: "0 10 10 10px" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
              color='white'
              fontWeight='bold'
            >
              Samyak Bora
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Content
            </Typography>
          </CardContent>
          <CardActions
            style={{ justifyContent: "flex-end", margin: "0 3px 3px 0" }}
          >
            <Button
              size="small"
              style={{
                backgroundColor: "#0077b5",
                color: "white",
                margin: "0 2px 0 2 px",
              }}
              href="https://www.linkedin.com/in/samyak-kiran-bora-37b755212/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            width: 275,
            margin: "0 15px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.15)" },
            backgroundColor: '#F5F5F5',
            backgroundImage: `url(${shreeyaImage})`,
            backgroundSize: 'cover'
          }}
        >
          <CardContent style={{ padding: "0 10 10 10px" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
            >
              Shreeya Daga
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Content
            </Typography>
          </CardContent>
          <CardActions
            style={{ justifyContent: "flex-end", margin: "0 3px 3px 0" }}
          >
            <Button
              size="small"
              style={{
                backgroundColor: "#0077b5",
                color: "white",
                margin: "0 2px 0 2 px",
              }}
              href="https://www.linkedin.com/in/shreeya-daga-3a00921b5/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
