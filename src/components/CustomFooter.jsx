import { Link } from "@heroui/link";
import React from "react";

const CustomFooter = () => {
  return (
    <div className="flex flex-col w-full items-center gap-10 py-10">
      <div className="w-2/3 flex justify-between items-center">
        <p className="text-blue-400 font-semibold text-lg">Grav</p>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
          <Link
            href="tel:+919727979075"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-400 transition"
          >
            <span className="text-lg font-medium">+91 97279 79075</span>
          </Link>
          <Link
            href="mailto:gauravgjani@gmail.com"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-400 transition"
          >
            <span className="text-lg font-medium">gauravgjani@gmail.com</span>
          </Link>
        </div>
      </div>
      <div className="w-2/3 border-t-2"></div>
      <div className="w-2/3 flex flex-col items-center gap-2">
        <p>Designed and Developed by Gaurav Jani</p>
        <p>All rights reserved. Copyright © 2025</p>
      </div>
    </div>
  );
};

export default CustomFooter;
