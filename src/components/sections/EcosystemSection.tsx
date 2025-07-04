import React, { useState, useRef, useMemo, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import QRCode from "react-qr-code";
import emailjs from "@emailjs/browser";

// Gold Sparkle Component
const GoldSparkle = ({
  delay = 0,
  duration = 3,
  size = 4,
  x = 0,
  y = 0,
}: {
  delay?: number;
  duration?: number;
  size?: number;
  x?: number;
  y?: number;
}) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [0, -20, -40],
      x: [0, Math.random() * 10 - 5, Math.random() * 20 - 10],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <div
      className="w-full h-full rounded-full shadow-lg"
      style={{
        background:
          "linear-gradient(to bottom right, rgb(120,81,45), rgb(222,150,83))",
        boxShadow: "0 4px 6px -1px rgba(222, 150, 83, 0.5)",
      }}
    />
  </motion.div>
);

// Enhanced QR Code Component
const QRCodeComponent = ({ size = 160 }: { size?: number }) => (
  <motion.div
    className="bg-white rounded-2xl p-4 shadow-2xl border border-amber-200/50"
    style={{ width: size, height: size }}
    whileHover={{ scale: 1.05, rotate: 2 }}
    transition={{ duration: 0.3 }}
  >
    <div className="w-full h-full bg-white rounded-xl relative p-2">
      <QRCode
        value="https://aurumplatform.io/register?ref=5413444d9eea0a4a0c2820241029133847607" // The data you want to encode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        viewBox={`0 0 256 256`}
      />
    </div>
  </motion.div>
);

export const EcosystemSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Generate sparkle data only once
  const sparkles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      delay: i * 0.3,
      duration: 2 + Math.random() * 2,
      size: 3 + Math.random() * 4,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all required fields are filled
    const isFormValid =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.message.trim() !== "";

    if (!isFormValid) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs
        .sendForm(
          "service_m6iobec",
          "template_n5iw1y5",
          formRef.current!,
          "7RvBpfvheXDm5kbA_"
        )
        .then(
          (result: { text: any }) => {
            console.log("SUCCESS!", result.text);
            setShowSuccessMessage(true);

            // Redirect after showing success message
            setTimeout(() => {
              window.location.href = "https://webinar.aurumnetwork.io/";
            }, 2000);
          },
          (error: { text: any }) => {
            console.log("FAILED...", error.text);
            alert("Failed to send message. Please try again.");
          }
        );
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="learn-more"
      className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-0 flex flex-col items-center bg-body relative"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-body"></div>

      {/* Animated Gold Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {sparkles.map((sparkle) => (
          <GoldSparkle
            key={sparkle.id}
            delay={sparkle.delay}
            duration={sparkle.duration}
            size={sparkle.size}
            x={sparkle.x}
            y={sparkle.y}
          />
        ))}
      </div>

      {/* Heading and Divider */}
      <motion.div
        ref={ref}
        className="max-w-7xl w-full flex flex-col items-center gap-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-white text-center bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent"
          initial={{ scale: 0.9 }}
          animate={hasAnimated ? { scale: 1 } : { scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get Started And Learn More
        </motion.h2>

        <motion.div
          className="w-full max-w-5xl h-1 my-2 rounded-full relative"
          style={{
            background:
              "linear-gradient(90deg, rgba(127,80,48,0) 0%, #e59445 50%, rgba(127,80,48,0) 100%)",
          }}
          initial={{ scaleX: 0 }}
          animate={hasAnimated ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: [-100, 500] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-neutral-300 text-center max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Explore how Aurum Network is transforming the gold industry. See the
          technology, community, and vision driving the future of gold.
        </motion.p>
      </motion.div>

      {/* Main Content Layout */}
      <div className="w-full max-w-7xl flex flex-col gap-8 lg:flex-row lg:gap-24 mt-16 relative z-10 justify-center">
        {/* Form Section */}
        <motion.div
          className="flex flex justify-center md:mx-4"
          initial={{ opacity: 0, x: -50 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.div
            className="w-full max-w-xl p-[1px] rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, #e59445 0%, #7f5026 50%, #e59445 100%)",
            }}
            whileHover={{ scale: 1.002 }}
            transition={{ duration: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full bg-hero rounded-3xl p-12 shadow-2xl relative overflow-hidden backdrop-blur-sm"
            >
              {/* Form glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-3xl"></div>

              <div className="relative z-10">
                {/* Success Message Overlay */}
                {showSuccessMessage && (
                  <motion.div
                    className="absolute inset-0 bg-gray-900/95 rounded-3xl flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        Registration Successful!
                      </h3>
                      <p className="text-neutral-300">
                        Redirecting to webinar...
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Form Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Join The Gold Revolution
                  </h3>
                  <p className="text-neutral-400">
                    Fill out the form to join the webinar and learn more
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  {/* Name */}
                  <div className="flex-1 flex flex-col gap-3">
                    <label className="text-white text-sm font-semibold tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-black/40 border border-neutral-600 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 placeholder:text-neutral-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  {/* Email */}
                  <div className="flex-1 flex flex-col gap-3">
                    <label className="text-white text-sm font-semibold tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-black/40 border border-neutral-600 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 placeholder:text-neutral-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-3 mb-6">
                  <label className="text-white text-sm font-semibold tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-black/40 border border-neutral-600 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 placeholder:text-neutral-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-3 mb-8">
                  <label className="text-white text-sm font-semibold tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-black/40 border border-neutral-600 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 placeholder:text-neutral-500 resize-none"
                    placeholder="Tell us about your interest in Aurum Network..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg font-bold text-white text-lg transition-all 
              duration-300 bg-gradient-to-r from-[#e59445] to-[#7f5026] hover:to-[#e59445] 
              active:from-[#7f5026] active:to-[#a86a1a] focus:outline-none mb-6"
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  Submit
                </motion.button>

                {/* Register Now CTA */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <p className="text-neutral-400 text-sm mb-4">Or you can</p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#e59445]"></div>
                    <a
                      href="https://aurumplatform.io/register?ref=5413444d9eea0a4a0c2820241029133847607"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.span
                        className="text-transparent text-sm font-semibold tracking-wider bg-clip-text"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #e59445,rgb(220, 154, 95), #e59445)",
                          backgroundSize: "200% auto",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        animate={{
                          backgroundPosition: [
                            "40% center",
                            "100% center",
                            "40% center",
                          ],
                        }}
                        transition={{
                          duration: 7.5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        REGISTER NOW
                      </motion.span>
                    </a>
                    <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#e59445]"></div>
                  </div>
                  <p className="text-neutral-400 text-sm">
                    Join thousands of investors already part of the gold
                    revolution
                  </p>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </motion.div>

        {/* QR Code & Info Section */}
        <motion.div
          className="flex flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0, x: 50 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {/* QR Code Card */}
          <motion.div
            className="bg-hero rounded-3xl p-8 backdrop-blur-sm border border-amber-500/20 shadow-2xl text-center max-w-sm w-full"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  Quick Access
                </h3>
                <p className="text-neutral-400 text-sm">
                  Scan to join instantly
                </p>
              </div>

              <QRCodeComponent size={180} />

              <div className="text-center">
                <p className="text-neutral-300 text-sm mb-2">
                  Or visit directly:
                </p>
                <motion.a
                  href="https://aurumplatform.io/register?ref=5413444d9eea0a4a0c2820241029133847607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 text-sm font-mono bg-black/30 px-3 py-2 rounded-lg hover:bg-black/50 transition-colors duration-200 break-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  aurumnplatform.io/register
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-sm">
            <motion.div
              className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-2xl p-6 border border-amber-500/20 text-center"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 bg-[#DE9348] rounded-full mx-auto mb-3 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">
                Instant Access
              </h4>
              <p className="text-neutral-400 text-xs">
                Get immediate entry by registering directly
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-2xl p-6 border border-amber-500/20 text-center"
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 bg-[#DE9348] rounded-full mx-auto mb-3 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h4 className="text-white font-semibold text-sm mb-1">
                Secure & Private
              </h4>
              <p className="text-neutral-400 text-xs">
                Your information is protected with us
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
