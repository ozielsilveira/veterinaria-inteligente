import { Montserrat, Open_Sans, Roboto } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['500'] })

export const metadata = {
  title: 'Veterinária Inteligente',
  description: 'Soluções tecnológicas para saúde animal, produtividade e gestão eficiente de rebanhos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} ${openSans.className} ${roboto.className}`}>
        {children}
      </body>
    </html>
  )
}

