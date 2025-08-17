import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const API = import.meta.env.VITE_API_KEY;

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, API).then(
      () => {
        setIsSent(true);
        form.current.reset();
        toast.success("E-mail Sent Successfully! ✅", {
          position: "top-right",
          autoClose: "3000",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      },
      (err) => {
        toast.error("Error sending mail", err);
        toast.error("Failed to send E-mail. Please Try Again.", {
          position: "top-right",
          autoClose: "3000",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
    );
  };
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px[7vw] lg:px-[10vw]"
    >
      <ToastContainer />

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#111111]">Contact</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-[#6B7280] mt-4 text-lg font-semibold">
          Feel free to get in touch for any professional opportunities,
          collaborations, or inquiries.
        </p>
      </div>

      <div className="mt-8 w-full max-w-md p-6 rounded-lg shadow-lg border border-[#E5E7EB] bg-white">
        <h3 className="text-xl font-semibold text-[#111111] text-center">
          Connect With Me
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md  text-[#111111] bg-[#F9FAFB] border border-[#E5E7EB] focus:border-[#8245EC]"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md  text-[#111111] bg-[#F9FAFB] border border-[#E5E7EB] focus:border-[#8245EC]"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md text-[#111111] bg-[#F9FAFB] border border-[#E5E7EB] focus:border-[#8245EC]"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-md  text-[#111111]  bg-[#F9FAFB] border border-[#E5E7EB]focus:border-[#8245EC]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#8245EC] to-[#5B21B6] py-3 text-[#F9FAFB] font-semibold rounded-md hover:from-[#A78BFA] hover:to-[#8245EC] transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
