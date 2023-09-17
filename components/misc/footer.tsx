import Link from 'next/link';
import React, { useState } from 'react';
import { subscribeCustomerIo } from '../utils/newsletter';

function Footer() {
  const [newsletterSubbed, setNewsletterSubbed] = useState(false);
  const subscribeNewsletter = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const success = subscribeCustomerIo(email);
    if (success) {
      setNewsletterSubbed(true);
    }
  }
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 pt-8 gap-8 md:pt-12 border-t border-gray-200">
          {/* 1st block */}
          <div className=" sm:col-span-12 md:col-span-6">
            <div className="mb-2 flex gap-4">
              {/* Logo */}
              <Link href="/" className="inline-block" aria-label="Cruip">
                <img className="w-8 h-8" src="/assets/logo-transparent.png" />
              </Link>
              <h2 className='shrink-0 mr-4 text-2xl font-bold tracking-tight md:tracking-tighter leading-tight'> E-Museum </h2>
            </div>
            <div className="text-sm text-gray-600">
              <Link href="[...slug]" as="terms-and-conditions" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</Link>
              {" · "}
              <Link href="[...slug]" as="privacy-policy" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</Link>
              {" · "}
              <Link href="[...slug]" as="faq" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">FAQ</Link>
            </div>
          </div>
          {/* <div className="sm:col-span-12 md:col-start-9 md:col-end-13 lg:col-start-10">
            <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
            <p className="text-sm text-gray-600 mb-4">Nhận tin tức và bài viết mới nhất vào hộp thư đến của bạn mỗi tháng.</p>
            <form
              id="newsletter_form"
              onSubmit={subscribeNewsletter}
            >
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" name="email" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                      <svg className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                      </svg>
                    </button>
                  </div>
                  Success message
                  {newsletterSubbed && <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p>}
                </div>
              </div>
            </form>
          </div>     */}

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <Link href="https://github.com/baolongdev" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="https://www.facebook.com/blong1204/" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; Blong12@. All rights reserved. </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
