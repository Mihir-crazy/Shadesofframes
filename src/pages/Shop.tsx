const products = [
  {
    id: 1,
    name: 'Classic Polaroid Print',
    price: '$9.99',
    imageSrc: 'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Classic Polaroid print with white frame.',
  },
  {
    id: 2,
    name: 'Wide Format Print',
    price: '$12.99',
    imageSrc: 'https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    imageAlt: 'Wide format Polaroid print.',
  },
  // Add more products as needed
];

export default function Shop() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}