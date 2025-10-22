import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const API = import.meta.env.VITE_API_KEY;

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(serviceId, templateId, form.current, API).then(
      () => {
        setIsSending(false);
        form.current.reset();
        toast.success(
          "Email sent successfully! I'll get back to you soon. ✨",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          }
        );
      },
      (err) => {
        setIsSending(false);
        console.error("Email error:", err);
        toast.error("Failed to send email. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
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
      className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-purple-50/30"
    >
      <ToastContainer />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Feel free to get in touch for any professional opportunities,
            collaborations, or inquiries. I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">
                Let's Connect
              </h3>
              <p className="text-[#6B7280] leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Drop me a message and
                let's start a conversation!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-200 justify-center">
            <h3 className="text-2xl font-bold text-[#111111] mb-6 text-center">
              Send Me a Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Your Email *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl text-[#111111] bg-gray-50 border-2 border-gray-200 focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Your Name *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Doe"
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl text-[#111111] bg-gray-50 border-2 border-gray-200 focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Subject *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl text-[#111111] bg-gray-50 border-2 border-gray-200 focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-xl text-[#111111] bg-gray-50 border-2 border-gray-200 focus:border-purple-500 focus:bg-white focus:outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 py-4 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSending ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
