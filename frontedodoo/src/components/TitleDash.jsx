export default function TitleDAsh(props) {
  const { name, href } = props;
  return (
    <a href = {href} class="flex items-center">
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> {name} </span>
    </a>
  )
}