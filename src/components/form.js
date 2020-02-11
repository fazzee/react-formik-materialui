import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export const Form = props =>  {

// let fileUpload = React.createRef();
  const classes = useStyles();
  const {
    values: { name, email, phoneNumber, address, zipCode, file },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  const fileUpload = (file) => {
    console.log('file',file);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Agent Form
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={() => {
            alert("submitted");
          }}
        ></form>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                helperText={touched.name ? errors.name : ""}
                error={touched.name && Boolean(errors.name)}
                onChange={change.bind(null, "name")}
                value={name}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                helperText={touched.email ? errors.email : ""}
                error={touched.email && Boolean(errors.email)}
                onChange={change.bind(null, "email")}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                type="phoneNumber"
                id="phoneNumber"
                helperText={touched.phoneNumber ? errors.phoneNumber : ""}
                error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                onChange={change.bind(null, "phoneNumber")}
                value={phoneNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Address"
                type="address"
                id="address"
                helperText={touched.address ? errors.address : ""}
                error={touched.address && Boolean(errors.address)}
                onChange={change.bind(null, "address")}
                value={address}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="zipCode"
                label="Zip Code"
                type="zipCode"
                id="zipCode"
                helperText={touched.zipCode ? errors.zipCode : ""}
                error={touched.zipCode && Boolean(errors.zipCode)}
                onChange={change.bind(null, "zipCode")}
                value={zipCode}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" component="label">
                Upload File
                <input type="file" style={{ display: "none" }} 
                onChange={fileUpload.bind(file)}
                value={file} />
              </Button>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
