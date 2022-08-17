import { FingerPrintIcon, CurrencyDollarIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/solicitud');
  };
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white"> Nuestras Funciones </h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400"> En este módulo pudes solicitar un préstamo u ofrecerlo a tus clientes.</p>
        <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a href="/soli" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
            onClick={handleClick}  
          >
            <FingerPrintIcon className="mr-3 w-7 h-7"></FingerPrintIcon>
            <div class="text-left">
              <div class="mb-1 text-xs"> El módulo puede  </div>
              <div class="-mt-1 font-sans text-lg font-semibold"> Solicitar </div>
            </div>
          </a>
          <a href="/pres" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <CurrencyDollarIcon className="mr-3 w-7 h-7"></CurrencyDollarIcon>
            <div class="text-left">
              <div class="mb-1 text-xs"> El módulo puede </div>
              <div class="-mt-1 font-sans text-lg font-semibold"> Ofrecer </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
} 
