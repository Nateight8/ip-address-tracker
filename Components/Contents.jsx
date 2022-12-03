import { Box } from "@mui/system";
import "leaflet/dist/leaflet.css";
// import Header from "./Header";
import {
  Button,
  Container,
  Divider,
  Grid,
  List,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DataSet from "./DataSet";
import React, { useEffect, useState } from "react";
import MapCaller from "./Map";
import { motion } from "framer-motion";

function Contents() {
  const [value, setValue] = useState("");
  const [address, setAddress] = useState(null);

  const ipRegex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/;
  const domainRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch(
          "https://geo.ipify.org/api/v2/country,city?apiKey=at_RDbE5cngyOAq690PiVoV5iqo2Zo6H&ipAddress="
        );
        const data = await res.json();
        setAddress(data);
        // console.log(address);
      };

      getData();
    } catch (error) {
      console.trace(error);
    }
  }, []);
  // console.log(address);

  async function getAddress() {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_RDbE5cngyOAq690PiVoV5iqo2Zo6H&ipAddress=${
        ipRegex.test(value) ? value : ""
      }`
    );
    const data = await res.json();
    setAddress(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getAddress();
    setValue("");
  };
  return (
    <>
      {" "}
      <Box>
        <Box
          sx={{
            backgroundColor: "rgba(12, 74, 110, 0.954)",
            height: "35vh",
            display: "flex",
            justifyContent: "center",
            paddingTop: "1em",
            color: "white",
          }}
        >
          <Container maxWidth="sm">
            <Stack
              alignItems="center"
              sx={{ width: "100%", paddingBlock: { xs: "2em", sm: 0 } }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "24px", sm: "38px" },
                  marginBlock: "0.8em",
                }}
              >
                IP Address Tracker
              </Typography>
              <form
                onSubmit={handleSubmit}
                style={{ width: "100%", display: "flex" }}
              >
                <TextField
                  //   id=""
                  label={
                    !ipRegex.test(value) && !domainRegex.test(value)
                      ? "Search for IP Address"
                      : "good to go"
                  }
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  size="small"
                  sx={{ width: "100%" }}
                />
                <Button type="submit" variant="contained" disableElevation>
                  Submit
                </Button>
              </form>
            </Stack>
          </Container>
        </Box>
        <motion.div
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 200, left: -125 }}
          whileTap={{ scale: 0.9 }}
        >
          {" "}
          <Paper
            sx={{
              backgroundColor: "white",
              width: { xs: "90%", sm: "60%" },
              position: "absolute",
              top: "25%",
              left: { xs: "5%", sm: "20%" },
              "&:hover": {
                cursor: "grab",
                // cursor: "grabbing",
              },
              "&:active": {
                cursor: "grabbing",
                // cursor: "grabbing",
              },
            }}
          >
            <List>
              <Grid container sx={{ paddingBlock: { sm: "0.5em" } }}>
                {address && (
                  <>
                    <DataSet primary="IP ADDRESS" secondary={address.ip} />
                    <Divider orientation="vertical" flexItem />
                    <DataSet
                      primary="LOCATION"
                      secondary={address.location.region}
                    />
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ display: { xs: "none", lg: "block" } }}
                    />
                    <DataSet
                      primary="TIMEZONE"
                      secondary={address.location.timezone}
                    />
                    <Divider orientation="vertical" flexItem />
                    <DataSet primary="ISP" secondary={address.isp} />
                  </>
                )}
              </Grid>
            </List>
          </Paper>
        </motion.div>
      </Box>
      <MapCaller address={address} />
    </>
  );
}

export default Contents;

// "192.212.174.101";
