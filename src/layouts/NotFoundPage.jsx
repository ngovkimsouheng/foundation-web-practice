import React from "react";
import NotFoundImage from "../assets/404 Error-bro.svg"
export default function NotFoundPage() {
  return (
    <div className="container max-w-7xl mx-auto">
      <main className="bg-yellow-100 h-[80vh] flex justify-center items-center">
        <img className="w-[50%]" src={NotFoundImage} alt="404 Not Found" />
      </main>
    </div>
  );
}
