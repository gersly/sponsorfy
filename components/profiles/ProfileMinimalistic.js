import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { RadioGroup } from '@headlessui/react'

import Image from 'next/image'
import axios from 'axios'

const settings = [
    { name: '30 seconds at Start', description: 'This ad would be at the start of the podcast', price: 75 },
    { name: '30 seconds at Random', description: 'This ad would be at a nice break in the podcast', price: 30 },
    { name: '30 seconds at End', description: 'This ad would be at the end of the podcast', price: 10 },
    { name: '10 seconds at Random', description: 'This ad would be at a nice break in the podcast', price: 5 },
]

const showData =
    [
        {
            name: "Country",
            value: "United States"
        },
        {
            name: "Total Episodes",
            value: "203"
        },
        {
            name: "Listeners per episode",
            value: "3.4k"
        },
        {
            name: "Frequency",
            value: "3 per/mo"
        },
        {
            name: "Verified",
            value: "Yes"
        }
    ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ProfileMinimalistic(props) {
    const { user, spotify } = props
    console.log(spotify)
    const [selected, setSelected] = useState(settings[0])
    const [data, setData] = useState({})


    function createMarkup() {
        return { __html: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/show/5eXZwvvxt3K2dxha3BSaAe?utm_source=generator&theme=0" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>` };
    }

    function SpotifyEmbed() {
        return <div dangerouslySetInnerHTML={createMarkup()} className="h-auto w-full" />;
    }


    // const getSpotifyData = () => {
    //     axios.get(`https://open.spotify.com/oembed?url=https://open.spotify.com/episode/7makk4oTQel546B0PZlDM5`)
    //         .then((response) => console.log(response.data))

    // }

    useEffect(() => {
        // getSpotifyData()
        if (spotify) {
            if (spotify === data) { }
            else {
                setData(spotify)
            }
        }
    }, [data, selected]);

    return (
        <div className='md:min-h-screen h-auto w-screen py-[10vh]'>
            <Head>
            </Head>
            <div className="grid grid-cols-4 gap-4 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-6 py-2">
                <div className='md:col-span-2 col-span-4 flex flex-col items-start justify-start space-y-5'>
                    {/* <div
                        className='md:h-full md:w-full h-[200px] w-full'
                        style={{
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center center',
                            // backgroundImage: `url(${user.shows[0].poster})`,
                            backgroundImage: `${spotify.thumbnail_url}`

                        }}>

                    </div> */}
                    <h2 className='md:text-6xl text-3xl font-semibold text-gray-900 '>{spotify.title}</h2>
                    <p className='md:text-lg text-md font-base text-gray-700'>on {spotify.provider_name}</p>
                    <p className='md:text-xl text-lg font-base text-gray-500'>Enim in mollit dolore sint reprehenderit
                        nisi do ea qui sunt labore dolore aliqua.
                        Ut esse aliqua do cillum mollit. Nisi nisi commodo aliqua est ea culpa commodo sunt.
                        Aliqua nostrud nulla sit consequat excepteur duis esse eiusmod occaecat minim.
                        Consequat ipsum ut nostrud laborum nulla fugiat pariatur irure consequat occaecat.
                    </p>

                    <div className='bg-white rounded-3xl px-6 py-2 grid grid-cols-2 gap-2 items-center w-full'>
                        {showData.map((item, index) =>
                            <div className='w-full h-[6vh] col-span-2 grid grid-cols-2 gap-2 items-center' key={index}>
                                <div className='md:col-span-1 col-span-1 text-gray-800'>
                                    <p className='font-medium text-lg'>{item.name}</p>
                                </div>
                                <div className='md:col-span-1 col-span-1 text-gray-800'>
                                    <p className='font-base text-lg'>{item.value}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


                <div className='md:col-span-2 col-span-4 flex flex-col items-center justify-start space-y-3 bg-gray-100'>
                    {/* <img src={spotify.thumbnail_url} layout="fill" /> */}
                    <span className=''>

                        <SpotifyEmbed />
                        <RadioGroup value={selected} onChange={setSelected} className="w-full my-5 rounded-3xl">
                            <RadioGroup.Label className="sr-only">Pricing</RadioGroup.Label>
                            <div className="bg-white rounded-3xl -space-y-px">
                                {settings.map((setting, settingIdx) => (
                                    <RadioGroup.Option
                                        key={setting.name}
                                        value={setting}
                                        className={({ checked }) =>
                                            classNames(
                                                settingIdx === 0 ? 'rounded-tl-3xl rounded-tr-3xl' : '',
                                                settingIdx === settings.length - 1 ? 'rounded-bl-3xl rounded-br-3xl shadow-sm' : '',
                                                checked ? 'bg-gray-100 border-gray-200 z-10' : 'border-gray-200',
                                                'relative border p-4 flex cursor-pointer focus:outline-none'
                                            )
                                        }
                                    >
                                        {({ active, checked }) => (
                                            <>
                                                <span
                                                    className={classNames(
                                                        checked ? 'bg-gray-600 border-transparent' : 'bg-white border-gray-300',
                                                        active ? 'ring-2 ring-offset-2 ring-gray-500' : '',
                                                        'h-4 w-4 mt-0.5 cursor-pointer shrink-0 rounded-full border flex items-center justify-center'
                                                    )}
                                                    aria-hidden="true"
                                                >
                                                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                                                </span>
                                                <span className="ml-3 flex flex-col w-full">
                                                    <div className='grid grid-cols-4 gap-4 w-full items-center'>
                                                        <span className=' col-span-3'>
                                                            <RadioGroup.Label
                                                                as="span"
                                                                className={classNames(checked ? 'text-gray-900' : 'text-gray-900', 'block text-lg')}
                                                            >
                                                                {setting.name}
                                                            </RadioGroup.Label>
                                                            <RadioGroup.Description
                                                                as="span"
                                                                className={classNames(checked ? 'text-gray-700' : 'text-gray-500', 'block text-md')}
                                                            >
                                                                {setting.description}
                                                            </RadioGroup.Description>
                                                        </span>

                                                        <p className='text-lg font-medium text-right px-4'>${setting.price}</p>
                                                    </div>

                                                </span>
                                            </>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                        <h3 className='md:text-6xl text-3xl font-semibold text-gray-900 md:py-10 py-5'>€{selected.price} <span className='text-xl text-gray-400 font-base'>per episode</span></h3>
                        <div className='grid grid-cols-3 gap-4 w-full'>
                            <button
                                type="button"
                                className="col-span-2 inline-flex justify-center items-center px-6 py-3 border border-transparent text-xl font-medium rounded-full shadow-sm 
                        text-white bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-800"
                            >
                                Pay Now
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-xl font-medium rounded-full shadow-sm 
                        text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-800"
                            >
                                Explore
                            </button>
                        </div>
                        <div className='md:py-10 py-5 w-full items-center justify-center flex flex-col space-y-2'>
                            <p className='font-base text-gray-400'>powered by <span className='text-gray-900 font-bold'>Sponsorfy</span></p>
                            <p className='text-gray-400 text-md'>made with <i className="ri-heart-3-fill text-red-500"></i>
                                <span className='text-gray-900 font-bold hidden'>Remotely</span></p>
                        </div>

                    </span>

                </div>
            </div>
        </div>
    )
}

export default ProfileMinimalistic