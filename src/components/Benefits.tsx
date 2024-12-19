'use client'
import { motion } from 'framer-motion'
import { Heart, Smartphone, TrendingUp } from 'lucide-react'

const benefits = [
  {
    title: "Bem-Estar Animal Garantido",
    description: "Soluções que promovem saúde e reduzem custos a longo prazo.",
    icon: Heart
  },
  {
    title: "Produtividade Maximizada",
    description: "Melhore os índices de reprodução e engorda com tecnologia de ponta.",
    icon: TrendingUp
  },
  {
    title: "Controle Total na Palma da Mão",
    description: "Acesse tudo via aplicativo, de qualquer lugar.",
    icon: Smartphone
  }
]

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold font-montserrat text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Maximize a Saúde e Produtividade do Seu Rebanho
        </motion.h2>
        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <benefit.icon className="w-16 h-16 text-[#2E7D32] mb-4" />
                <h3 className="text-2xl font-bold font-montserrat mb-2">{benefit.title}</h3>
                <p className="text-gray-600 font-open-sans">{benefit.description}</p>
              </div>
              <div className={`flex-1 bg-[#C8E6C9] h-64 rounded-lg ${index % 2 === 0 ? 'order-first' : ''}`}>
                {/* Placeholder for image or illustration */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

