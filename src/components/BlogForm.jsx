import { Form, Formik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
// import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";

const validationSchema = yup.object({
  title: yup.string().label("Title").required(),
  imageUrl: yup.string().label("Image").required(),
  content: yup.string().label("Content").required(),
});

const INITIAL_DATA = {
  title: "",
  imageUrl: "",
  content: "",
};

export default function BlogForm({ blog = INITIAL_DATA, onSubmit }) {
  return (
    <Formik
      initialValues={blog}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        handleChange,
        handleBlur,
        touched,
        errors,
        isSubmitting,
      }) => (
        <Form className="blogform">
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "50ch",
              },
            }}
          >
            <div>
              <TextField
                name="title"
                label="Title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title && errors.title}
              />
            </div>
            <div>
              <TextField
                name="imageUrl"
                label="Image URL"
                value={values.imageUrl}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.imageUrl && Boolean(errors.imageUrl)}
                helperText={touched.imageUrl && errors.imageUrl}
              />
            </div>
            <div>
              <TextField
                name="content"
                label="Content"
                value={values.content}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.content && Boolean(errors.content)}
                helperText={touched.content && errors.content}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, width: 440 }}
              loading={isSubmitting}
            >
              {/* <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, width: 440 }}
              loading={isSubmitting}
            > */}
              SUBMIT
              {/* </LoadingButton> */}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
