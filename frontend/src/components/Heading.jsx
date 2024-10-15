export default function Heading({ title, subtitle }) {
  return (
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold">{title}</h1>
      <p className="text-lg text-gray-300">{subtitle}</p>
    </div>
  );
}
