import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Eva Saxena</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Eva Saxena! <3" />
        <p className="description">
          Welcome to this test website for conducting nuxjs project.
          </p>
      </main>

      <Footer />
    </div>
  )
}
