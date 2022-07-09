import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function RegisterForm(props) {
    const { username, password, setUsername, setPassword, title } = props

    return (
        <div>
            <div className='h-full w-full'>
                <div className='h-auto max-w-7xl w-full mx-auto 
                px-4 sm:px-6 lg:px-8 md:py-10 py-5 items-center flex flex-col'>
                    <h1 className='md:text-6xl text-3xl font-bold text-gray-900 py-10'>
                        {title || "Register"}
                    </h1>
                    <div className="rounded-3xl -space-y-px md:w-1/2 w-full">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none md:h-20 h-16 relative block w-full 
                                px-6 py-2 border 
                                border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-3xl
                                 focus:z-10 text-xl"
                                placeholder="Email address"
                            />
                        </div>
                        <div className=" w-full flex rounded-3xl">
                            <span className="inline-flex items-center px-6 outline-none  rounded-r-none border 
                            border-r-0 border-gray-300 bg-gray-200 text-gray-500 md:text-xl text-lg">
                                spons.io/
                            </span>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="username"
                                className="flex md:h-20 h-16 w-full px-6  rounded-l-none border  
                                bg-white border-l-0 md:text-xl text-lg border-gray-300 focus:z-10"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none  rounded-none md:h-20 h-16 relative block w-full px-6 py-2 
                                border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-3xl 
                                focus:z-10 md:text-xl text-xl "
                                placeholder="Password"
                            />
                        </div>
                        <div className='py-10'>
                            <button
                                type="button"
                                className="w-full inline-flex justify-center items-center  px-6 py-3 border 
                                border-transparent text-xl font-base rounded-full shadow-sm 
                        text-white bg-gray-900"
                            >
                                Sign Up
                            </button>

                        </div>
                        <div className='py-5 text-center'>
                            <Link href="/sign-in">
                                Already have an account ?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

RegisterForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    setUsername: PropTypes.func,
    setPassword: PropTypes.func,
    title: PropTypes.string
}

export default RegisterForm
