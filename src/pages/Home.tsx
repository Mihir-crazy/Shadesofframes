import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Capture moments in timeless Polaroid style
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Transform your digital memories into beautiful Polaroid prints. Custom sizes, shapes, and styles available.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/custom-print"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Start Creating
                </Link>
                <Link to="/gallery" className="text-sm font-semibold leading-6 text-gray-900">
                  View Gallery <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Polaroid camera and prints"
        />
      </div>
    </div>
  );
}