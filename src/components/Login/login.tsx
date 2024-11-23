import { Button, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";
import '../../assets/fonts/poppins.css';

function Login () {

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const handlelogin = () =>{
    console.log(Email, "Its Email");
    console.log(Password, "Its Password");
  }

    return(
      <Grid 
      component='div'
      container sx={{
        backgroundImage: 'url("https://img.freepik.com/free-photo/majestic-mountain-peak-nature-beauty-tranquil-sunset-landscape-generated-by-ai_188544-250562.jpg?t=st=1730272192~exp=1730275792~hmac=ae918f86ab2cda18818cc8770f555bafb1b58c36e3803f2317cb1f44bc0b002a&w=1060")',
        backgroundSize:"cover",
        backgroundPosition:'center',
        backgroundColor:'lightblue',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        width:'100vw',
        overflow:'hidden'
      }}>
        <Paper
        sx={{
          // backgroundColor:'pink',
          height:'55vh',
          width:'35vw',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          gap:2,
          borderRadius:5
        }}>
          <TextField 
          label="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width:'20vw',
            fontFamily:'poppins',
          }}
          InputProps = {{
            sx : {
              fontFamily:'poppins'
            }
          }}
          InputLabelProps={{
            sx :{
              fontFamily:'poppins'
            }
          }}
          >
          </TextField>
          <TextField 
          label="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            width:'20vw'
          }}
          InputProps={{
            sx : {
              fontFamily:'poppins'
            }
          }}
          InputLabelProps={{
            sx : {
              fontFamily:"poppins"
            }
          }}
          >
          </TextField>

          <Button onClick={handlelogin} sx={{
              alignItems:'center',
              justifyContent:'center',
              backgroundColor:'transparent',
              fontFamily:'poppins',
              width:'10vw',
              "&:hover":{
                color:'red'
              }
          }}>
            Login
          </Button>
        </Paper>
      </Grid>
    )
}

export default Login;