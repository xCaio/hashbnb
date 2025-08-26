import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return <section className='flex items-center'>
          <div className="flex flex-col items-center gap-4 mx-auto max-w-96 w-full">
            <h2 className="text-3xl font-bold">Faça seu login</h2>
            <form className='flex flex-col gap-2 w-full'>
                <input type="email" className='w-full rounded-full border border-gray-300 py-2 px-4' placeholder='Digite seu email'/>
                <input type="password" className='w-full rounded-full border border-gray-300 py-2 px-4'placeholder='Digite sua senha'/>
                <button className='bg-primary-400 text-white py-2 rounded-full cursor-pointer duration-300 hover:scale-105'>Login</button>
            </form>
            <p>Ainda não tem uma conta? <Link to="/register" className="font-bold underline cursor-pointer">Registre-se aqui</Link></p>
          </div>
        </section>
  
}

export default Login