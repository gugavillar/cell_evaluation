import { Quicksand, Ubuntu } from 'next/font/google'

const ubuntuFont = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const quickSandFont = Quicksand({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export const fonts = {
  fonts: {
    heading: ubuntuFont.style.fontFamily,
    body: quickSandFont.style.fontFamily,
  },
}
