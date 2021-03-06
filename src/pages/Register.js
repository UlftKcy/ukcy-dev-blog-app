import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik, ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { createUser } from "../utils/firebase";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Grid,
  Container,
  Avatar,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const stylesFunc = makeStyles({
  wrapper: {
    maxWidth: "30rem",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    marginBottom: 20,
    backgroundColor: "#f44336",
  },
  signUp: {
    marginBottom: 20,
  },
});

const validationSchema = yup.object({
  username: yup.string().required("Please Enter a username"),
  email: yup.string().email().required("Please Enter your Email"),
  password: yup
    .string("")
    .min(8, "Password must contain at least 8 characters")
    .required("Enter your password"),
  confirmPassword: yup
    .string("Enter your password")
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Password does not match"),
});
const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  showPassword: "false",
};

const Register = () => {
  const history = useHistory();
  const onSubmit = (values) => {
    createUser(values.email, values.password, values.username);
    history.push("/");
  };

  const signupStyles = stylesFunc();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Container className={signupStyles.wrapper}>
      <Avatar className={signupStyles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={signupStyles.signUp} variant="h4">
        Register
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                name="username"
                label="User Name"
                variant="outlined"
                fullWidth
                required
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder="Username"
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <ErrorMessage name="username" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <ErrorMessage name="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                required
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <ErrorMessage name="password" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="confirmPassword"
                label="Password Again"
                variant="outlined"
                type="password"
                fullWidth
                required
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                placeholder="Confirm Password"
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
              <ErrorMessage name="confirmPassword" />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};
export default Register;
