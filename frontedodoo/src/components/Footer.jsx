import TitleDAsh from "./TitleDash";

export default function Footer() {
  return (
    <footer class="p-4 bg-white shadow md:px-9 md:py-8 dark:bg-cyan-900">
      <div class="sm:flex sm:items-center sm:justify-around">
        <TitleDAsh name={'odooPrestamos'}/>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-white">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
          </li>
          <li>
            <a href="#" class="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-white-700 lg:my-8" />
      <span class="block text-sm text-gray-500 sm:text-center dark:text-white">© 2022 - Desarrollo de Software Empresarial.
      </span>
    </footer>
  );
}
