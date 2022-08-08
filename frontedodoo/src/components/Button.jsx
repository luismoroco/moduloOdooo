export default function Button(props) {
  const { name, href } = props;
  return (
    <a href = {href} class="flex md:order-2">
      <button type="button" class="text-white bg-cyan-800 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-cyan-900 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"> {name} </button>
    </a>
  );
}
