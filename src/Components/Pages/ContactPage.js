function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-teal-800 mb-6">Contact Us</h2>
      <form className="space-y-6">
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-teal-800 text-white font-bold rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Send Message
        </button>
      </form>

      <footer className="mt-12 text-center">
        <p className="text-gray-600">
          You can also reach us at:
          <a
            href="mailto:support@example.com"
            className="text-teal-800 hover:underline ml-1"
          >
            support@example.com
          </a>
        </p>
        <p className="text-gray-600">
          Or call us at:
          <a
            href="tel:+18001234567"
            className="text-teal-800 hover:underline ml-1"
          >
            1-800-123-4567
          </a>
        </p>
        <p className="text-gray-400 text-sm mt-4">
          © 2024 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default ContactPage;
