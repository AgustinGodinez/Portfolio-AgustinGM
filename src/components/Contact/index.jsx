import { useRef, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  ContactForm,
  ContactTitle,
  ContactInput,
  ContactInputMessage,
  ContactButton,
  Span,
} from "./ContactStyle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";


const schema = yup.object().shape({
  from_email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  from_name: yup.string().required("Name is required"),
  message: yup.string().required("Message is required"),
});
export const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    emailjs
      .sendForm("service_ut0ywwj", "template_m5j03tl", form.current, {
        publicKey: "01kGmaDAp9es5_1pC",
      })
      .then(
        () => {
          setOpen(true);
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit(onSubmit)}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" {...register("from_email")} />
          {errors.from_email && (
            <Span className="">{errors.from_email.message}</Span>
          )}
          <ContactInput placeholder="Your Name" {...register("from_name")} />
          {errors.from_name && <Span>{errors.from_name.message}</Span>}
          <ContactInputMessage
            placeholder="Message"
            rows="4"
            {...register("message")}
          />
          {errors.message && <Span>{errors.message.message}</Span>}
          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          style={{
            position: "absolute",
            marginBottom: "20px",
          }}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Email sent successfully!
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};
