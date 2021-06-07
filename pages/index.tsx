import Layout from '../components/layout'
import Link from 'next/link'
import React from 'react'
import { LoginForm } from '../components/loginForm'

export default function Home() {

  return (
    <Layout>
      <section>
        <h1>Login</h1>
        <LoginForm />
        <p>
          <Link href="/register">
            <a>Are you not registered?</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}

