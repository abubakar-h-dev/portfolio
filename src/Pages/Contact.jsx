function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      
      {/* TITLE */}
      <h2 className="text-3xl font-bold text-center mb-4">
        Get In Touch
      </h2>

      <p className="text-center text-gray-600 mb-12">
        Have a project or opportunity? Let’s talk.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT – CONTACT INFO */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-1">Email</h3>
            <p className="text-gray-700">
              <a
                href="mailto:yourmail@gmail.com"
                className="text-blue-600 hover:underline"
              >
                mohamedabubakar10050@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
            <p className="text-gray-700">
              <a
                href="https://wa.me/971503498676?text=Hello%20Mohamed,%20I%20checked%20your%20portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Location</h3>
            <p className="text-gray-700">Sharjah, UAE</p>
          </div>
        </div>

        {/* RIGHT – CONTACT FORM */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}

export default Contact;
