export default function Link() {
  return (
    <div className="backgroundSearch relative w-[80%] top-16  items-center justify-between p-10 rounded-xl flex gap-5 mx-auto">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="bg-white outline-none rounded-xl w-[90%] h-15 px-4 py-4"
      />
      <button className="bg-primary-blue rounded-xl text-white h-15 w-[20%] text-xl px-4 py-2">
        Shorten It!
      </button>
    </div>
  );
}
