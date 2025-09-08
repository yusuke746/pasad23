import { Resend } from "resend";
import {redirect} from  'next/navigation'


// EMAIL SENDGING FUCTIONALITY 
// ADD RESEND_API_KEY IN YOUR .ENV FILE 
const resend = new Resend("re_dummy_api_key");
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");
  if (!message) {
    return {
      error: "Invalid message",
    };
  }
  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: `mdtaqui.jhar@gmail.com`,
    subject: `${name} From Contact Form.`,
    replyTo: `${SenderEmail}`,
    text: `sender email: ${SenderEmail} 
     ${message}`,
  });

return redirect('/')
 
  
};
