import { Link, Outlet } from "react-router-dom";

function HelpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 py-8">
      <div className="w-full max-w-lg">
        <nav className="flex flex-col items-start space-y-4">
          <Link
            to="faq"
            className="text-lg text-teal-800 font-semibold hover:text-teal-600"
          >
            FAQ
          </Link>
          <Link
            to="contact"
            className="text-lg text-teal-800 font-semibold hover:text-teal-600"
          >
            Contact Us
          </Link>
        </nav>
        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HelpPage;
