import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/LOGO 2.png";
import appStore from "../../assets/app-store.svg";
import googlePlay from "../../assets/google-play.svg";

const footerCols = [
  {
    title: "Legal Pages",
    links: [
      "Terms and conditions",
      "Privacy",
      "Cookies",
      "Modern Slavery Statement",
    ],
  },
  {
    title: "Important Links",
    links: [
      "Get Help",
      "Add your restaurant",
      "Sign up to deliver",
      "Create a business account",
    ],
  },
];

export default function SiteFooter() {
  return (
    <>
      {/* MAIN FOOTER */}
      <footer className="bg-[#D9D9D9] border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
            {/* LEFT SECTION - Logo + App Badges + Company Info */}
            <div className="lg:col-span-4 flex flex-col items-center md:items-start space-y-6">
              {/* LOGO */}
              <img
                src={logo}
                alt="Order.uk"
                className="h-8 sm:h-10 w-auto object-contain"
              />

              {/* APP BADGES */}
              <div className="flex flex-col sm:flex-col lg:flex-row gap-1 lg:gap-1 w-full max-w-[400px] lg:max-w-none">
                <a href="#" className="block gap-0 lg:flex-1 lg:gap-0 ">
                  <img
                    src={appStore}
                    alt="Download on App Store"
                    className="h-40 lg:h-30 w-full lg:max-w-[160px] object-contain "
                  />
                </a>
                <a href="#" className="block lg:flex-1">
                  <img
                    src={googlePlay}
                    alt="Get it on Google Play"
                    className="h-40 lg:h-30 w-full lg:max-w-[160px] object-contain mx-auto lg:mx-0"
                  />
                </a>
              </div>

              {/* COMPANY INFO */}
              <p className="text-xs text-gray-500 text-center md:text-left leading-relaxed">
                Company # 490039-445, Registered with
                <br />
                House of companies.
              </p>
            </div>

            {/* MIDDLE SECTION - Newsletter */}
            <div className="lg:col-span-5 flex flex-col space-y-4 lg:space-y-6">
              <h3 className="text-lg font-bold text-gray-900 text-center md:text-left">
                Get Exclusive Deals in your Inbox
              </h3>

              <form
                className="flex flex-col sm:flex-row gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <button className="px-6 py-2.5 rounded-lg bg-orange-400 text-white font-semibold hover:bg-green-700 transition-colors duration-200 whitespace-nowrap text-sm">
                  Subscribe
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center md:text-left">
                We won't spam, read our{" "}
                <a
                  href="#"
                  className="underline hover:text-green-600 transition-colors"
                >
                  email policy
                </a>
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex gap-4 text-xl text-gray-600 justify-center md:justify-start pt-2">
                <FaFacebook className="hover:text-green-600 cursor-pointer transition-colors duration-200" />
                <FaInstagram className="hover:text-green-600 cursor-pointer transition-colors duration-200" />
                <FaTwitter className="hover:text-green-600 cursor-pointer transition-colors duration-200" />
                <FaSnapchat className="hover:text-green-600 cursor-pointer transition-colors duration-200" />
                <FaTiktok className="hover:text-green-600 cursor-pointer transition-colors duration-200" />
              </div>
            </div>

            {/* RIGHT SECTION - Footer Links */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8 text-sm">
              {footerCols.map((col, index) => (
                <div key={col.title} className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-center sm:text-left lg:text-left">
                    {col.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-500 hover:text-green-600 transition-colors duration-200 block text-center sm:text-left lg:text-left text-sm leading-relaxed"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* COPYRIGHT BAR */}
      <CopyrightBar />
    </>
  );
}

function CopyrightBar() {
  return (
    <div className="bg-blue-950 text-white px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs">
          <p className="text-center sm:text-left">
            Order.uk © Copyright 2024. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-2 justify-center sm:justify-end items-center">
            <a
              href="#"
              className="underline hover:text-blue-200 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="text-blue-300">|</span>
            <a
              href="#"
              className="underline hover:text-blue-200 transition-colors duration-200"
            >
              Terms
            </a>
            <span className="text-blue-300">|</span>
            <a
              href="#"
              className="underline hover:text-blue-200 transition-colors duration-200"
            >
              Pricing
            </a>
            <span className="text-blue-300">|</span>
            <a
              href="#"
              className="underline hover:text-blue-200 transition-colors duration-200"
            >
              Do not sell my personal information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
