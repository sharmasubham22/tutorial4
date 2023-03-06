import { React, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let incomingData = useLocation();
   const [user, setUser] = useState([]);
  const id = incomingData.state.id;
console.log(id);
       const fetchData = () => {
    return fetch(`https://express-t4.onrender.com/api/users/`+id)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <Container sx={{mt:15}}>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12} md={12}>
          <Card sx={{ maxWidth: "100%", m: "auto" }}>
            <CardMedia
              component="img"
              alt="profile picture"
              height="150"
              sx={{ width: 150, margin: "auto" }}
              image={user.picture}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {user.name}
              </Typography>
              <Typography variant="h7" color="text.secondary">
                {user.about}
              </Typography>
              <br /><br/>
              <Typography variant="h7" color="text.secondary">
                <b>Email:</b> {user.email}
              </Typography>
              <br />
              <Typography variant="h7" color="text.secondary">
                <b>Age: </b>
                {user.age}
              </Typography>
              <br />
              <Typography variant="h7" color="text.secondary">
                <b>Eye color:</b> {user.eyeColor}
              </Typography>
              <br />
              <Typography variant="h7" color="text.secondary">
                <b>Gender: </b>
                {user.gender}
              </Typography>{" "}
              <br />
              <Typography variant="h7" color="text.secondary">
                <b>Company: </b>
                {user.company}
              </Typography>{" "}
              <br />
              <Typography variant="h7" color="text.secondary">
                <b>Phone: </b>
                {user.phone}
              </Typography>{" "}
              <br />
              <Typography variant="h7" color="text.secondary">
                <b>Address: </b>
                {user.address}
              </Typography>{" "}
              <br />
              <Typography variant="h7" color="text.secondary">
                <b>Favorite fruit: </b>
                {user.favoriteFruit}
              </Typography>{" "}
              <br />
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>{navigate("/user")}}>
                Back
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Profile;
