import React from "react";

const Contact = () => {
  return (
    <div className="m-4 p-4">
      <h1 className="font-bold text-3xl m-4 p-4">Contact Page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className=" border border-black p-2 m-2"
        />
        <input
          type="text"
          placeholder="message"
          className=" border border-black p-2 m-2"
        />
        <button className="bg-gray-300 p-2 rounded-lg ">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
