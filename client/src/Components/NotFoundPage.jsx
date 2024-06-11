import React from "react";
import { Link } from "react-router-dom";

//links to the profile Dashboard page
const NotFoundPage = () => {
  return (
    <>
      <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <p class="text-base font-semibold text-theme-dark-yellow">404</p>
          <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p class="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <Link
              class="rounded-md bg-theme-dark-yellow px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-theme-dark-grey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              to="/my-profile"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
