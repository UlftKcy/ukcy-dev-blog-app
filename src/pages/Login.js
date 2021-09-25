import { Container, makeStyles } from "@material-ui/core";
import { Avatar, Typography, TextField, Grid, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Form, Formik, useFormik, ErrorMessage } from "formik";
import * as yup from "yup";
import { signIn, signUpProvider, forgotPassword } from "../functions/firebase";

const useStylesLogin = makeStyles({
  wrapper: {
    margin: "auto",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
    maxWidth: "30rem",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: "#f44336",
  },
  login: {
    margin: 15,
  },
});
const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().email("Email not valid").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const history = useHistory();

  const onSubmit = (values) => {
    console.log("values:", values);
    signIn(values.email, values.password);
    history.push("/");
  };
  const handleGoogleButtonClick = async () => {
    signUpProvider();
    history.push("/");
  };

  const classes = useStylesLogin();
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Container maxWidth="md" className={classes.wrapper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={classes.login} variant="h4">
        Login
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleGoogleButtonClick}
              >
                Login With Google
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};
export default Login;
