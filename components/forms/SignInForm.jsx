import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

function SignInForm(props) {
    const { username, password, setUsername, setPassword } = props

    return (
        <div>
            <div className='h-full w-full'>
                <div className='h-auto md:max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 md:py-10 py-5 
                items-center flex flex-col'>
                    <h1 className='md:text-6xl text-3xl font-bold text-gray-900 py-10'>
                        Sign In
                    </h1>
                    <div className="rounded-3xl -space-y-px md:w-1/2 w-full">
                        {/* <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none md:h-20 h-16 relative block w-full px-6 py-2 border 
                                border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-3xl
                                 focus:z-10 sm:text-xl"
                                placeholder="Email address"
                            />
                        </div> */}
                        <div className=" w-full flex rounded-3xl">
                            <span className="inline-flex items-center px-6 outline-none  rounded-r-none rounded-t-3xl 
                            border border-r-0 border-gray-300 bg-gray-200 text-gray-500 md:text-xl text-lg">
                                spons.io/
                            </span>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="username"
                                className="flex md:h-20 h-16 w-full px-6 rounded-l-none border rounded-t-3xl 
                                bg-white border-l-0 md:text-xl text-lg border-gray-300"
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
                                className="appearance-none rounded-none md:h-20 h-16 relative block w-full px-6 py-2 
                                border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-3xl 
                                focus:z-10 md:text-xl text-lg"
                                placeholder="Password"
                            />
                        </div>
                        <div className='py-10'>
                            <button
                                type="button"
                                className="w-full inline-flex justify-center items-center  px-6 py-3 
                                border border-transparent text-xl font-base rounded-full shadow-sm 
                        text-white bg-gray-900"
                            >
                                Sign In
                            </button>

                        </div>
                        <div className='py-5 text-center'>
                            <Link href="/forgot-password">
                                Forgot password?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

SignInForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    setUsername: PropTypes.func,
    setPassword: PropTypes.func
}

export default SignInForm
