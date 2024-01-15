import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";

const SERVICE_ID: string = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID ?? '';
const TEMPLATE_ID: string = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID ?? '';
const PUBLIC_KEY: string = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY ?? '';

const ContactService = {
  sendContactForm: async function(name: string, message: string, contactEmail: String): Promise<EmailJSResponseStatus> {
    const templateParams = {
      from_name: name,
      message: message,
      contact_email: contactEmail,
    }

    return await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    )
  }
}

export default ContactService;