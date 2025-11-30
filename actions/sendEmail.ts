"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { socialsData } from "@/lib/data";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(formData: FormData) {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!validateString(message, 500)) {
    return {
      error: "Invalid message",
    };
  }

  if (!validateString(senderEmail, 5000)) {
    return {
      error: "Invalid sender email",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: socialsData.email.address,
      subject: `Message From Portfolio Contact Form`,
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data: data,
  };
}

export default sendEmail;
