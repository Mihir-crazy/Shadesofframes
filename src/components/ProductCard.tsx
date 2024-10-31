import { motion } from 'framer-motion';

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

export default function ProductCard({ name, price, imageSrc, imageAlt, description }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200/50"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-200">
        <motion.img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-blue-600">{price}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}