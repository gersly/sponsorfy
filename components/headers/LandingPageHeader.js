import React from 'react'
import TopNavigation from '../navigation/TopNavigation'
import Link from 'next/link'
const items = [
    {
        image: 'http://www.workovereasy.com/wp-content/uploads/2017/03/HA-copy-800x1135.png',
        title: 'The Lap of Honour'
    },
    {
        image: 'https://storage.googleapis.com/pr-newsroom-wp/1/2022/05/SPOTIFY-PODCAST-POSTERS3-scaled.jpg',
        title: 'The Sounds of Africa'
    },
    {
        image: 'https://media.newyorker.com/photos/5a2abc4c5a7eec1ed861cbe0/master/pass/Larson-Heavyweight-Podcast.jpg',
        title: 'Heavyweight'
    },
    {
        image: 'https://assets.fireside.fm/file/fireside-images/podcasts/images/9/95f152b6-5df9-4e93-af90-5b913eecf92c/episodes/4/46ee4d23-a56f-4eea-a5bc-ff19ead1bd80/cover_medium.jpg?v=1',
        title: 'Q42'
    }
]
export default function LandingPageHeader() {
    return (
        <>
            <TopNavigation bg={'#ffffff'} />
            <div className='md:h-auto h-auto pt-[10vh]'>

                <div className="grid grid-cols-6 gap-4 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-6 py-2">
                    <div className='md:col-span-3 col-span-6 flex flex-col justify-center items-start h-full py-10 md:py-5'>
                        <h1 className='md:text-6xl text-4xl font-bold md:w-[85%] w-full text-gray-900'>
                            Monitize your podcast, blog or YouTube channel
                        </h1>
                        <p className='my-3 md:text-2xl text-xl text-gray-500'>
                            The where potential advertisers and content creators meet.
                        </p>
                        <Link href="/create-profile">
                            <button
                                type="button"
                                className="inline-flex my-2 items-center px-3 py-1.5 border border-transparent text-xl 
                        font-base rounded-full shadow-sm text-secondary-dark bg-secondary-light"
                            >
                                Create my profile
                            </button>
                        </Link>
                        <Link href="/example">
                            <button

                                type="button"
                                className="inline-flex my-2 items-center px-3 py-1.5 border border-gray-200 text-xl 
                            font-base rounded-full shadow-sm text-gray-900 bg-gray-100 "
                            >
                                View example
                            </button>
                        </Link>
                    </div>
                    <div className='md:col-span-3 col-span-6 md:p-4 md:flex md:flex-col md:justify-center md:items-center h-full w-full'>
                        <div className="grid md:grid-cols-2 grid-cols-2 gap-2 w-full h-full bg-transparent">
                            {items.map((item, index) =>
                                <div key={index} className="w-full bg-gray-50 md:col-span-1 col-span-3 md:h-[320px] rounded-3xl"
                                    style={{
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center',
                                        backgroundImage: `url(${item.image})`,

                                    }}>
                                    <div className="bg-gradient-to-b 
                                from-gray-900  via-transparent  
                                to-gray-900 h-full w-full rounded-3xl flex
                                flex-col justify-between p-4">
                                        <p className='font-semibold text-white text-xl'>{item.title}</p>
                                        <div className='flex flex-row justify-between items-center'>

                                            <div>
                                                <p className='font-semibold text-white font-sm'>24 episodes</p>
                                                <p className='font-base text-gray-400'>Content creator</p>
                                            </div>
                                            <button
                                                type="button"
                                                className="rounded-full flex flex-col 
                                                items-center justify-center h-8 w-8
                                             text-white bg-third "
                                            >
                                                <i className="ri-play-fill ri-lg"></i>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
