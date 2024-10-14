export default function InputItems({ labelText, placeholderText }) {
  return (
    <div className="mb-5">
      <label className="mb-1 block text-lg font-bold">{labelText}</label>
      <input
        type="text "
        className="w-full rounded-lg px-4 py-2 text-black"
        placeholder={placeholderText}
      />
    </div>
  );
}
