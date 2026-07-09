"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
} as const;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    // Replace with your company's actual WhatsApp number (include country code, no "+" or spaces)
    const whatsappNumber = "919999999999";

    // Construct and encode the structured WhatsApp text layout
    const encodedText = encodeURIComponent(
      `*New Inquiry - Shri Ganesh Enterprises*\n\n` +
        `👤 *Name:* ${name}\n` +
        `✉️ *Email:* ${email}\n` +
        `📞 *Phone:* ${phone || "Not provided"}\n\n` +
        `📝 *Message:* ${message}`,
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp in a new tab/app window
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Reset the form layout and UI button state
    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <main className="min-h-screen bg-zinc-950 pt-28 pb-16 text-foreground relative overflow-hidden">
      {/* Background Decorative Blurs - Optimized Canonical Sizing */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-white via-zinc-200 to-zinc-400"
          >
            Lets Start a Conversation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground"
          >
            Fill out the form below to instantly generate a structured inquiry
            and send it over WhatsApp to our team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Contact Info Sidebar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-md"
            >
              <h3 className="text-xl font-bold mb-6 text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* WhatsApp Option */}
                <a
                  href="https://wa.me/919999999999?text=Hello%20Shri%20Ganesh%20Enterprises,%20I'm%20interested%20in%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 text-muted-foreground hover:text-emerald-400 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-black">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
                      WhatsApp Chat
                    </p>
                    <p className="text-sm sm:text-base font-medium">
                      +91 99999 99999
                    </p>
                  </div>
                </a>

                {/* Email Option */}
                <a
                  href="mailto:info@shriganesh.com"
                  className="group flex items-start gap-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
                      Email Us
                    </p>
                    <p className="text-sm sm:text-base font-medium break-all">
                      info@shriganesh.com
                    </p>
                  </div>
                </a>

                {/* Direct Call Option */}
                <a
                  href="tel:+919999999999"
                  className="group flex items-start gap-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
                      Call Us
                    </p>
                    <p className="text-sm sm:text-base font-medium">
                      +91 99999 99999
                    </p>
                  </div>
                </a>

                {/* Complete Address Block */}
                <div className="group flex items-start gap-4 text-muted-foreground">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
                      Our Address
                    </p>
                    <p className="text-sm sm:text-base font-medium leading-relaxed text-zinc-300">
                      Shri Ganesh Enterprises
                      <br />
                      Plot No. 45, Industrial Area Phase II,
                      <br />
                      Near Metro Station, New Delhi,
                      <br />
                      Delhi - 110020, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Hours Summary Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-linear-to-br from-primary/10 to-transparent border border-white/5"
            >
              <h4 className="font-semibold text-primary mb-2">
                ⚡ Business Hours
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Monday - Saturday: 9:00 AM - 6:00 PM
                <br />
                Sunday: Closed
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", delay: 0.3 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-900/20 backdrop-blur-xl shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-zinc-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 h-12 rounded-xl bg-zinc-900 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground placeholder:text-zinc-600"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-zinc-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 h-12 rounded-xl bg-zinc-900 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-zinc-300"
                >
                  Phone Number{" "}
                  <span className="text-zinc-500 font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 99999 99999"
                  className="w-full px-4 h-12 rounded-xl bg-zinc-900 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-foreground placeholder:text-zinc-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-zinc-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your requirements or questions here..."
                  className="w-full p-4 rounded-xl bg-zinc-900 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none text-foreground placeholder:text-zinc-600"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl text-base font-semibold transition-transform active:scale-98 flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                Send Message via WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
