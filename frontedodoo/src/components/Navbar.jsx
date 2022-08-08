import TitleDAsh from './TitleDash';
import BoxDash from './BoxDash';
import Button from './Button';

export default function NavBar() {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-cyan-700">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <TitleDAsh name={'odooPrestamos'} href={'/pres'} />
        <Button href = {'/addcliente'} name = {'Añadir Cliente'} />
        <BoxDash/>
      </div>
    </nav>
  );
}