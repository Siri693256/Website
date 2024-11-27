import { Button, Grid, Paper, TextField, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import '../../assets/fonts/poppins.css';

function Register() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handlelogin = () => {
    console.log(Email, "Its Email");
    console.log(Password, "Its Password");
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid
      component="div"
      container
      sx={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/majestic-mountain-peak-nature-beauty-tranquil-sunset-landscape-generated-by-ai_188544-250562.jpg?t=st=1730272192~exp=1730275792~hmac=ae918f86ab2cda18818cc8770f555bafb1b58c36e3803f2317cb1f44bc0b002a&w=1060")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        overflow: "hidden"
      }}
    >
      <Paper
        sx={{
          height: "55vh",
          width: "35vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          borderRadius: 5
        }}
      >
        <TextField
          label="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "20vw",
            fontFamily: "poppins"
          }}
          InputProps={{
            sx: {
              fontFamily: "poppins"
            }
          }}
          InputLabelProps={{
            sx: {
              fontFamily: "poppins"
            }
          }}
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"} // Toggle password visibility
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            width: "20vw"
          }}
          InputProps={{
            sx: {
              fontFamily: "poppins"
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
          InputLabelProps={{
            sx: {
              fontFamily: "poppins"
            }
          }}
        />
        <Button
          onClick={handlelogin}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            fontFamily: "poppins",
            width: "10vw",
            "&:hover": {
              color: "red"
            }
          }}
        >
          Register now
        </Button>
      </Paper>
    </Grid>
  );
}

export default Register;
