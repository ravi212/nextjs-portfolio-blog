"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Spinner from "../../common/Spinner";
import { postMessage, verifyCaptcha } from "@/lib/actions/message.action";
import ReCAPTCHA from "react-google-recaptcha";

// Validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters long"),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messageError, setMessageError] = useState<any>("");
  const [messageSuccess, setMessageSuccess] = useState("");
  const [captchaStatus, setCaptchaStatus] = useState<any>(undefined);
  const [captchaCode, setCaptchaCode] = useState(null);
  const recaptchaRef = React.createRef<any>();
  // Initialize Formik with useFormik hook
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      if (!captchaCode) {
        setCaptchaStatus(false);
        return;
      } else {
        const res = await verifyCaptcha(captchaCode);
        if (res?.success) {
          setCaptchaStatus(true);
          setMessageError("");
          setMessageSuccess("");
          setIsLoading(true);
          const res = await postMessage(values);
          if (res?.success) {
            setIsLoading(false);
            setMessageSuccess("Message sent successfully!");
            setTimeout(() => {
              setMessageSuccess("");
              setMessageError("");
              formik.resetForm();
            }, 3000);
          } else {
            setIsLoading(false);
            setMessageError(res?.error);
          }
          setCaptchaCode(null);
        } else {
          setCaptchaStatus(false);
        }
      }
    },
  });

  const onReCAPTCHAChange = async (captchaCode) => {
    if (captchaCode) {
      setCaptchaCode(captchaCode);
      setCaptchaStatus(true);
    }
  };

  const asyncScriptOnLoad = () => {
    // console.log('Google recaptcha loaded just fine')
  };

  return (
    <div className="flex flex-col w-full max-w-lg p-4 sm:p-6 bg-white border shadow-md rounded-md gap-1 overflow-hidden">

      <form
        onSubmit={formik.handleSubmit}
        className="h-full gap-4 py-4 flex flex-col"
      >
        <div className="flex flex-col gap-1">
          <label className="text-base font-normal" htmlFor="name">
            Title
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            placeholder="Enter Your Name..."
            className="mt-1 block w-full p-2 border text-gray-900 border-gray-300 rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 text-sm font-normal">
              {formik.errors.name}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-base font-normal" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            placeholder="Enter Your Email..."
            className="mt-1 block w-full p-2 border text-gray-900 border-gray-300 rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm font-normal">
              {formik.errors.email}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-base font-normal" htmlFor="email">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter Your Message..."
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="mt-1 block w-full p-2 border text-gray-900 border-gray-300 rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {formik.touched.message && formik.errors.message ? (
            <p className="text-red-500 text-sm font-normal">
              {formik.errors.message}
            </p>
          ) : null}
        </div>
  <div className="captcha-scale">
    <ReCAPTCHA
      ref={recaptchaRef}
      size="normal"
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      onChange={onReCAPTCHAChange}
      asyncScriptOnLoad={asyncScriptOnLoad}
    />
  </div>

        {!captchaStatus && captchaStatus != undefined ? (
          <p className="text-red-500 text-sm font-normal">
            Verify you are not a robot!
          </p>
        ) : null}
        <div className="flex flex-col justify-end items-center gap-4 py-3">
          <button
            type="submit"
            className="w-full p-2 bg-darkColor text-center text-white font-semibold rounded-sm shadow-sm hover:bg-secondaryTextColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLoading && <Spinner />}

            {!isLoading && <p>Send</p>}
          </button>
          {messageError && (
            <p className="text-red-500 text-base">{messageError}</p>
          )}
          {messageSuccess && (
            <p className="text-green-500 text-base">{messageSuccess}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
