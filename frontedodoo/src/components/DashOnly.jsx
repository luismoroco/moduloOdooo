import TitleDAsh from "./TitleDash";

export default function DashNameOnly() {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-cyan-700">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <TitleDAsh name={'odooPrestamos'} href={'/pres'} />
      </div>
    </nav>
  );
}