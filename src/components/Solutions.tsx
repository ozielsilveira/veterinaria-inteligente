'use client'
import { motion } from 'framer-motion'
import { BarChart, BookOpen, Stethoscope } from 'lucide-react'

const solutions = [
  {
    title: "Monitoramento de Saúde Animal",
    description: "Tecnologia para acompanhar sinais vitais e prevenir problemas antes que ocorram.",
    icon: Stethoscope
  },
  {
    title: "Histórico Veterinário Automatizado",
    description: "Organize consultas, vacinas e diagnósticos em um só lugar.",
    icon: BookOpen
  },
  {
    title: "Análise de Dados Avançada",
    description: "Relatórios inteligentes para decisões mais rápidas e eficientes.",
    icon: BarChart
  }
]

export default function Solutions() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#A5D6A7] to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold font-montserrat text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Transforme a Gestão da Saúde do Seu Rebanho
        </motion.h2>
        <div className="flex justify-center mb-12">
          <div className="w-10 h-1 bg-[#FFEB3B]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <solution.icon className="w-12 h-12 text-[#2E7D32] mb-4" />
              <h3 className="text-xl font-bold font-montserrat mb-2">{solution.title}</h3>
              <p className="text-gray-600 font-open-sans">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

