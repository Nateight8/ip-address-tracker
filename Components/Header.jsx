import { Box, Button, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useState } from "react";

function Header() {
//   const [value, setValue] = useState("");
//   const [address, setAddress] = useState("");

//   //   console.log(address);

//   async function getAddress() {
//     const res = await fetch(
//       `https://geo.ipify.org/api/v2/country,city?apiKey=at_yTDCniWMww1wLQVAeMBW24VcPlW26&ipAddress=${value}`
//     );
//     const data = await res.json();
//     setAddress(data);
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     getAddress();
//   };

  return (
    // <Box
    //   sx={{
    //     backgroundColor: "rgba(12, 74, 110, 0.954)",
    //     height: "35vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     paddingTop: "1em",
    //     color: "white",
    //   }}
    // >
    //   <Container maxWidth="sm">
    //     <Stack alignItems="center" sx={{ width: "100%" }}>
    //       <Typography
    //         variant="h1"
    //         sx={{ fontSize: "38px", marginBlock: "0.5em" }}
    //       >
    //         IP Address Tracker
    //       </Typography>
    //       <form
    //         onSubmit={handleSubmit}
    //         style={{ width: "100%", display: "flex" }}
    //       >
    //         <TextField
    //           //   id=""
    //           label="Search For Any IP Address"
    //           value={value}
    //           onChange={(e) => setValue(e.target.value)}
    //           size="small"
    //           sx={{ width: "100%" }}
    //         />
    //         <Button type="submit" variant="contained">
    //           Submit
    //         </Button>
    //       </form>
    //     </Stack>
    //   </Container>
    // </Box>
  );
}

export default Header;
