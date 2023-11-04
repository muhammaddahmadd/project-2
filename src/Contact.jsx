import { useState } from "react";

export default function Contact({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email) return;
    const newUser = {
      name,
      email,
      description,
    };
    setUser(newUser);
    setName("");
    setEmail("");
    setDescription("");
    console.log(newUser);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-40 mx-2 flex ml-10 flex-col">
        <div className="flex-col mb-10">
          <h1 className=" font-extrabold font-serif uppercase text-4xl">
            Contact us
          </h1>
          <p className="uppercase text-sm text-stone-600 mt-4">
            lets connect we are here to help people grow, and we help grow
            bussinesses using doifferent strateigies
          </p>
        </div>
        <div className="flex-row space-x-8 ">
          <button className="bg-black text-stone-200  font-semibold w-40 px-3 rounded-lg py-1">
            Via Support Chat
          </button>
          <button className="bg-black text-stone-200 font-semibold w-40 px-3 rounded-lg py-1">
            Via call
          </button>
        </div>

        <div className=" flex flex-col mt-5">
          <button className="text-stone-700 font-semibold border uppercase border-stone-600 border-spacing-2 bg-white w-80 px-3 rounded-lg py-1">
            Via Email form
          </button>
          <div className="flex flex-col justify-center items-center w-80">
            <div className="relative w-64 my-4">
              <label className="absolute bg-white px-2 ml-2  bottom-8 left-1 text-gray-600">
                Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500"
              />
            </div>
            <div className="relative w-64 my-4">
              <label className="absolute bg-white px-2 ml-2  bottom-8 left-1 text-gray-600">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500"
              />
            </div>
            <div className="relative w-64 my-4">
              <label className="absolute bg-white px-2 ml-2 left-1 bottom-16 text-gray-600">
                Description:
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border h-20 border-gray-300  rounded-lg focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        <button className="bg-black ml-20 text-stone-200 font-semibold w-40 px-3 rounded-lg py-1">
          Submit
        </button>
      </div>
    </form>
  );
}
