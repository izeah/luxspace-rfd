import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ErrorMessage({ code, message }) {
  return (
    <section className="">
      <div className="container mx-auto min-h-screen">
        <div className="flex flex-col items-center justify-center mt-60">
          <div className="w-full md:w-4/12 text-center">
            <h1 className="text-9xl font-semibold mb-6">{code}</h1>
            <p className="text-lg mb-12">{message}</p>
            <Link
              to="/"
              className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

ErrorMessage.propTypes = {
  code: PropTypes.number,
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  code: 404,
  message: "Page you are looking for not found.",
};
