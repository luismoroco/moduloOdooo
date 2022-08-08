export default function Tittle(props) {
  const { name } = props;
  return (
    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      { name }
    </p>
  );
}