import { Box, Grid, ListItemText, styled } from "@mui/material";
import React from "react";

function DataSet({ primary, secondary }) {
  const listStyle = {
    ".MuiListItemText-secondary": {
      fontSize: { xs: "16px", sm: "1.24rem" },
      fontWeight: 700,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },

    ".MuiListItemText-primary": {
      opacity: 0.5,
      marginBottom: "0.3em",
      fontSize: { xs: "16px", sm: "1rem" },
    },
  };

  return (
    <Grid
      item
      xs={5.9}
      // md={5.9}
      lg={2.9}
      sx={{
        padding: { xs: "0.5em", sm: "1rem" },
      }}
    >
      <ListItemText sx={listStyle} primary={primary} secondary={secondary} />
    </Grid>
  );
}

export default DataSet;
