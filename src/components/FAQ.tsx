'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: "Preciso de equipamentos adicionais?",
    answer: "Nossa solução é acessível via dispositivos móveis ou desktop, sem necessidade de hardware extra."
  },
  {
    question: "Como a plataforma ajuda a reduzir custos veterinários?",
    answer: "Através do monitoramento preventivo e análise de dados, podemos identificar problemas de saúde precocemente, reduzindo a necessidade de intervenções caras."
  },
  {
    question: "A plataforma é difícil de usar?",
    answer: "Não, nossa interface é intuitiva e projetada para ser fácil de usar. Além disso, oferecemos treinamento e suporte contínuo."
  },
  {
    question: "Posso integrar com outros sistemas que já uso?",
    answer: "Sim, nossa plataforma é projetada para integrar com vários sistemas comuns de gestão agrícola. Entre em contato conosco para discutir suas necessidades específicas."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

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
          Dúvidas Comuns
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-100 rounded-lg focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-bold text-[#1B5E20]">{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-[#1B5E20]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#1B5E20]" />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-50 p-4 rounded-b-lg"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

