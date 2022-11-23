import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Animate } from "react-simple-animate";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Animate
      play
      start={{
        opacity: "40%"
      }}
      end={{ opacity: "100%" }}
      duration={1}
      delay={0.1}
    >
      <Component {...pageProps} />
    </Animate>
  )
}
