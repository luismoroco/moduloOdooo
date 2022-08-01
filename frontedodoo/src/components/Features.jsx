import { ScaleIcon, ClockIcon, PencilAltIcon, HeartIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Cronogramas',
    description:
      'Generamos los cronogramas para facilitarlle al usuario y así este cumpla con sus plazos.',
    icon: ClockIcon,
  },
  {
    name: 'Contratos',
    description:
      'Los contratos son idispensables para la empresa por ello brindamos un modelo a sus necesidades.',
    icon: ScaleIcon,
  },
  {
    name: 'Solicitudes',
    description:
      'Emite solicitudes por oficina para ser aprobados por la gerencia general.',
    icon: PencilAltIcon,
  },
  {
    name: 'Interfaz',
    description:
      'Una interfaz amigable para poder registrar los prestamos que ofreces a tus clientes.',
    icon: HeartIcon,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-cyan-700 font-semibold tracking-wide uppercase">Módulo de Préstamos </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
           Una mejor manera de Gestionar préstamos
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Una herramienta que permitirá una mejor gestión de tus préstamos y la solicitud de los mismos
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-cyan-700 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}