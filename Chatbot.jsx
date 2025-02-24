import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-400 rounded-lg ">
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" text-white px-4 py-3 rounded-full  "
      >
        <AiOutlineMessage size={24} />
      </button>

      {/* Chatbot Box */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg p-4 mt-4">
          <h3 className="text-xl font-bold text-[#264653] mb-4">
            Chat with Us!
          </h3>
          <div className="flex flex-col space-y-2 overflow-y-auto h-64">
            <p className="bg-[#f5f5f5] p-2 rounded-lg text-[#333333]">
              Hi! How can we help you?
            </p>
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full border border-gray-300 rounded-lg p-2 mt-2"
          />
        </div>
      )}
    </div>
  );
}
