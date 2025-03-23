import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { theme } from "../../theme/theme";
import toast from "react-hot-toast";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  date: Yup.date()
    .required("Date is required")
    .min(new Date(), "Date cannot be in the past"),
});

const initialValues = {
  name: "",
  email: "",
  date: null,
  comment: "",
};

function BookingForm() {
  const handleSubmit = (_, actions) => {
    actions.resetForm();
    toast("✅ Booking successfully submitted");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          border: theme.borders.primary,
          borderRadius: theme.borders.rounded,
          padding: "44px 57px",
        }}
      >
        <Box sx={{ mb: 3, gap: 1 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Book your campervan now
          </Typography>
          <Typography variant="body1" color="secondary.main">
            Stay connected! We are always ready to help you.
          </Typography>
        </Box>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 527,
                }}
              >
                <Field name="name">
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      type="text"
                      placeholder="Name*"
                      fullWidth
                      error={!!values.name && !field.value}
                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                alignSelf: "center",
                                opacity: `${
                                  !!values.name || !field.value ? 1 : 0
                                }`,
                                pointerEvents: "none",
                              }}
                            >
                              <Typography
                                variant="body2"
                                fontSize={14}
                                sx={{ color: "button.main" }}
                              >
                                {meta.error}
                              </Typography>
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  )}
                </Field>

                <Field name="email">
                  {({ field, meta }) => (
                    <TextField
                      {...field}
                      type="email"
                      placeholder="Email*"
                      fullWidth
                      error={!!values.email && !field.value}
                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              sx={{
                                alignSelf: "center",
                                opacity: `${
                                  !!values.email || !field.value ? 1 : 0
                                }`,
                                pointerEvents: "none",
                              }}
                            >
                              <Typography
                                variant="body2"
                                fontSize={14}
                                sx={{ color: "button.main" }}
                              >
                                {meta.error}
                              </Typography>
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  )}
                </Field>

                <Field name="date">
                  {({ form }) => (
                    <DesktopDatePicker
                      value={values.date}
                      onChange={(date) => setFieldValue("date", date)}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          placeholder: "Booking Date*",
                          error:
                            form.touched.date && form.errors.date
                              ? true
                              : false,
                          helperText:
                            form.touched.date && form.errors.date
                              ? form.errors.date
                              : "",
                        },
                      }}
                    />
                  )}
                </Field>

                <Field name="comment">
                  {({ field }) => (
                    <TextField
                      {...field}
                      placeholder="Comment"
                      multiline
                      rows={4}
                      fullWidth
                    />
                  )}
                </Field>

                <Button type="submit" variant="contained">
                  Send
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </LocalizationProvider>
  );
}

export default BookingForm;
