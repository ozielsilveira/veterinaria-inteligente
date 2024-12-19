'use client'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#2E7D32] to-[#1B5E20] text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold font-montserrat mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Pronto para levar sua gestão veterinária a outro nível?
        </motion.h2>
        <motion.button
          className="bg-[#FFEB3B] text-[#1B5E20] font-roboto font-medium py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-[#C8E6C9]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Solicitar Demonstração
        </motion.button>
      </div>
    </section>
  )
}

