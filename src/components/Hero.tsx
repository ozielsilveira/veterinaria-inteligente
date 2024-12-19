'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E7D32] to-transparent opacity-80 z-10" />

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-montserrat mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Veterinária Inteligente para Pecuária de Alta Performance
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl font-open-sans text-gray-200 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Soluções tecnológicas para saúde animal, produtividade e gestão eficiente de rebanhos.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            className="bg-[#2E7D32] hover:bg-[#64B5F6] text-white font-roboto font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explorar Soluções
          </motion.button>
          <motion.button
            className="bg-transparent border-2 border-white text-white font-roboto font-medium py-3 px-6 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Demonstração
          </motion.button>
        </div>
      </div>
    </section>
  )
}

