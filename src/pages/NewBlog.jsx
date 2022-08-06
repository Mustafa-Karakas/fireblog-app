import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function NewBlog() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "50ch",
          display: "flex",
          justifyContent: "center",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField required id="outlined-required" label="Title" />
      </div>
      <div>
        <TextField required id="outlined-required" label="Image URL" />
      </div>
      <div>
        <TextField required id="outlined-required" label="Content" />
      </div>
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2, width: 440 }}
      >
        SUBMIT
      </Button>
    </Box>
  );
}
