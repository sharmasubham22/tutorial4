import { React, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function UsersList() {
  let navigate = useNavigate();
  const [user, setUser] = useState([]);
   const [inputText, setInputText] = useState("");

  const fetchData = () => {
    return fetch("https://express-t4.onrender.com/api/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        textAlign="center"
        fontWeight="bold"
        padding="30px"
      >
        List of Users
      </Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        onChange={(e) => setInputText(e.target.value)}
        fullWidth
        label="Search"
        sx={{mb:5}}
      />
      <Grid container spacing={8}>
        {user &&
          user.length > 0 &&
          user
            .filter((user) => user.name.toLowerCase().includes(inputText.toLowerCase()))
            .map((userObj, index) => (
              <Grid item key={userObj.id} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="profile picture"
                    height="200"
                    sx={{ objectFit: "cover", margin: "auto" }}
                    image={userObj.picture}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {userObj.name}
                    </Typography>
                    <Typography variant="h7" color="text.secondary">
                      {userObj.email}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={()=>{
                       navigate("/profile", {
                               state: {
                                     id: userObj._id,
                                        },
                                      });
                    }}>
                      View Profile
                    </Button>
                  </CardActions>
                </Card>
                
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}
export default UsersList;
