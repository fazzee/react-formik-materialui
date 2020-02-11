import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import {Form} from "./form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";

const styles = theme => ({
 paper: {
   marginTop: theme.spacing.unit * 8,
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
     .spacing.unit * 5}px`
 },
 container: {
   maxWidth: "200px"
 }
});

const phoneNumberRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phoneNumber: Yup.string().matches(phoneNumberRegex, 'Phone number is not valid'),
  address: Yup.string("Enter your address")
    .required("Address is required"),
    zipCode: Yup.number().required("zipcode is required"),
    file: Yup.object(),
});
    

class UserForm extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

 render() {
   const classes = this.props;
   const values = { name: "", email: "", phoneNumber: "", address: "", zipCode: "", file: "" };
   return (
     <React.Fragment>
          <div className={classes.container}>
         <Paper elevation={1} className={classes.paper}>
           <h1>Form</h1>
           <Formik
            render={props => <Form {...props} />}
            initialValues={values}
            validationSchema={validationSchema}
        />
         </Paper>
       </div>
     </React.Fragment>
   );
 }
}

export default withStyles(styles)(UserForm);