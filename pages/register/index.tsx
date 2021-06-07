import Link from "next/link";
import React from "react";
import Layout from "../../components/layout";
import { RegisterForm } from "../../components/registerForm";

export default function Register() {

  return (
    <Layout>
      <section>
      <h1>Register</h1>
        <RegisterForm />
        <p><Link href="/">
          <a>← Back to Login</a>
        </Link></p>
      </section>
    </Layout>
  )
}