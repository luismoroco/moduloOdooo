import ItemNav from './ItemNav';

const navigation = [
  { name: 'Prestamos', href: '/pres'},
  { name: 'Clientes', href: '/pres' }
]

export default function BoxDash() {
  return (
    <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-cyan-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-cyan-800 md:dark:bg-cyan-900 dark:border-gray-700">
        <li>
          <a href="/pres" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 text-white" aria-current="page">Home</a>
        </li>
        {navigation.map((item) => (
          <ItemNav name = {item.name} href = {item.href}/>
        ))}
      </ul>
    </div>
  );
}