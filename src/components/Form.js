import React, { useState } from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import ReactDOM from 'react-dom'
import FileUpload from "react-mui-fileuploader"
import axios from "axios";
import {
  Container,
  Button,
  DialogActions,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  TextField,
  Typography,
  Box,
  Card,
  CardContent
} from "@mui/material";
// icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SendIcon from "@mui/icons-material/Send";

const Form = () => {
  const fileInput = React.useRef();


  const [data, setData] = useState([{ firstName: "", lastName: "" }]);
  // changeHandle
  const changeHandle = (index, e) => {
    const values = [...data];
    values[index][e.target.name] = e.target.value;
    setData(values);
  };
  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("data", data);
  };

  const submit = () => {
    console.log(fileInput)
  };

  // add form
  const addHandler = () => {
    setData([...data, { firstName: "", lastName: "" }]);
  };
  // delete form
  const deleteHandler = (index) => {
    const values = [...data];
    values.splice(index, 1);
    setData(values);
  };

   const handleFileUploadError = (error) => {
    // Do something...
  }
  
  const handleFilesChange = (files) => {
    // Do something...
  }

  return (
    <Container maxWidth="lg">
        <Card styles ={{marginBottom : '2%'}}>
            <CardContent>

      <Typography variant="h3" color="text.secondary" textAlign="center">
        New IAT Work Request
      </Typography>
      <form onSubmit={submitHandler}>
        {data.map((item, index) => (
          <Box component="div" key={index} display="flex" alignItems="center">
            <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 4, sm: 4, md: 3 }}
      justify="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item xs={6}>
        <TextField
          fullWidth
          select
          key={"type"}
          labelId={"type"}
          label={"type"}
          value={["BUG", "TASK"]}
          // onChange={(event) => onFieldChange(item.field, event.target.value)}
        >
          <MenuItem key={"BUG"} value={"BUG"}>
            BUG
          </MenuItem>
          <MenuItem key={"TASK"} value={"TASK"}>
            TASK
          </MenuItem>
        </TextField>
      </Grid>


      <Grid item xs={6}>
        <TextField
          fullWidth
          key={"Summary"}
          label={"Summary"}
          // onChange={(event) => onFieldChange(item.field, event.target.value)}
        />
      </Grid>

      <Grid item xs={12}>
      <TextField
      fullWidth
        id="outlined-multiline-flexible"
        label="Description"
        multiline
        maxRows={4}
        // value={value}
        // onChange={handleChange}
      />
      </Grid>

      <Grid item xs={12}>
      <TextField
          fullWidth
          select
        key={"environment"}
        labelId={"environment"}
        label={"Environment"}
        value={["DEVTEST", "DEV", "UAT", "PRD"]}
        // onChange={(event) => onFieldChange(item.field, event.target.value)}
      >
        <MenuItem key={"DEVTEST"} value={"DEVTEST"}>
          DEVTEST
        </MenuItem>
        <MenuItem key={"DEV"} value={"DEV"}>
        
          DEV
        </MenuItem>
        <MenuItem key={"UAT"} value={"UAT"}>
          UAT
        </MenuItem>
        <MenuItem key={"PRD"} value={"PRD"}>
          PRD
        </MenuItem>
      </TextField>
      </Grid>

      <Grid item xs={6}>
      <TextField
        fullWidth
        key={"Name"}
        label={"Name"}
        // onChange={(event) => onFieldChange(item.field, event.target.value)}
      />
</Grid>

<Grid item xs={6}>
      <TextField
        fullWidth
        key={"Email"}
        label={"Email"}
        // onChange={(event) => onFieldChange(item.field, event.target.value)}
      />
      </Grid>

      <Grid item xs={3}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          // value={value}
          // onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      </Grid>
      <Grid item xs={3}>
      <div>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={()=>fileInput.current.click()}
      >
        upload file
      </Button>

      <input 
        ref={fileInput} 
        type="file" 
        style={{ display: 'none' }} 
      />
    </div>
        </Grid>

        <Button 
        variant="contained" 
        color="primary" 
        onClick={()=>submit()}
      >
        Submit
      </Button>
    </Grid>
          </Box>
        ))}
        {/* <Button
          sx={{ margin: "5px" }}
          onClick={submitHandler}
          size="small"
          type="submit"
          variant="contained"
          color="success"
          endIcon={<SendIcon />}
        >
          Send
        </Button> */}
      </form>
      </CardContent>
        </Card>
    </Container>
  );
};

export default Form;
