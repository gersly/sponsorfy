import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Discover Creators', href: '/discover', current: false },
    { name: 'Pricing', href: '/#pricing', current: false },
    { name: 'Blog', href: '#', current: false }
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TopNavigation(props) {
    const { bg, profile } = props
    if (profile) {
        return <Disclosure as="nav" style={{
            background: bg ? bg : '#F4F4F4',
            width: '100%',
            zIndex: 50,
            paddingTop: '10px',
            paddingBottom: '10px'
        }}>
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">

                                <div className="flex-shrink-0 flex items-center">
                                    <Link href="/">
                                        <button
                                            type="button"
                                            className="inline-flex my-2 items-center  px-3 py-1.5 border border-transparent text-xl 
                        font-base rounded-full shadow-sm text-gray-900 bg-gray-200 hover:bg-gray-300"
                                        >
                                            <i className="ri-arrow-left-line mr-1"></i>Sponsio
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </>
            )}
        </Disclosure>
    } else {
        return (
            <Disclosure as="nav" style={{
                background: bg ? bg : '#F4F4F4',
                position: 'fixed',
                width: '100%',
                zIndex: 50,
                paddingTop: '10px',
                paddingBottom: '10px'
            }}>
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex">
                                    <div className="-ml-2 mr-2 flex items-center md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center 
                                        justify-center p-2 rounded-md 
                                        transition-shadow duration-300 text-gray-500 hover:text-gray-500 ">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <i className="ri-close-line"></i>
                                            ) : (
                                                <i className="ri-menu-line"></i>
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    <div className="flex-shrink-0 flex items-center">
                                        <Link href="/">
                                            <p className='text-gray-900 text-xl cursor-pointer'>Sponsio</p>
                                        </Link>
                                    </div>
                                    <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    'text-gray-700  hover:text-gray-900',
                                                    'px-3 py-2 rounded-full text-xl font-base'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xl 
                        font-base rounded-full shadow-sm text-secondary-dark bg-secondary-light"
                                        >
                                            Get started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(' text-gray-900',
                                            'block px-3 py-2 rounded-full text-xl font-base'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>

                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        )
    }
}