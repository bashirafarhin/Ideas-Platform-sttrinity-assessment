"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer>
      <div className="w-full max-w-[95%] mx-auto bg-blue-600 rounded-md py-16 px-6 md:py-24 md:px-12 my-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start gap-4 text-white">
            <Link href="/" className="flex items-center font-bold text-2xl">
              <Logo />
            </Link>
            <p className="text-sm max-w-sm text-center md:text-left">
              Building the next-gen platform where ideas grow and communities thrive.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm">
            <div>
              <h2 className="mb-4 font-semibold uppercase text-white">Follow us</h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://github.com/yourprofile"
                    target="_blank"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/yourinvite"
                    target="_blank"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-semibold uppercase text-white">Legal</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 font-semibold uppercase text-white">Newsletter</h2>
              <form className="flex flex-col gap-3">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
  type="email"
  id="email"
  placeholder="Enter your email"
  className="w-full px-3 py-2 bg-transparent text-white placeholder-gray-400 border-b border-white focus:outline-none focus:border-blue-500"
 />

              <button
  type="submit"
  className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-white hover:text-blue-500 border border-blue-500 transition"
>
  Subscribe
</button>

              </form>
              <div className="flex gap-4 mt-4">
                <SocialIcon href="https://twitter.com" Icon={Twitter} label="Twitter" className="bg-blue-500"/>
                <SocialIcon href="https://instagram.com" Icon={Instagram} label="Instagram" />
                <SocialIcon href="https://linkedin.com" Icon={Linkedin} label="LinkedIn" />
                <SocialIcon href="https://youtube.com" Icon={Youtube} label="YouTube" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] my-8 bg-white" />

        {/* Bottom Section */}
        <div className="text-center text-sm text-white">
          © 2025{" "}
          <Link href="/">
            Company™
          </Link>{" "}
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

// ✅ Reusable Social Icon Component
const SocialIcon = ({ href, Icon, label }) => (
  <Link href={href} target="_blank" aria-label={label}>
    <div className="text-white p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-transform hover:scale-110">
      <Icon size={20} />
    </div>
  </Link>
);

export default Footer;
