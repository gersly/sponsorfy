import Head from 'next/head'
import TopNavigation from '../../components/navigation/TopNavigation'
import ProfileMinimalistic from '../../components/profiles/ProfileMinimalistic'

const user = {
    details: {
        name: 'Eli Manning',
        biography: `Sunt laboris culpa consectetur nostrud nulla reprehenderit pariatur do aliquip do 
        qui sunt. Proident aute minim anim ipsum non Lorem proident fugiat ad minim exercitation enim id. 
        Ullamco consectetur sunt pariatur magna reprehenderit aute laboris tempor mollit nulla consequat anim. 
        Labore ex Lorem eiusmod id irure. Culpa mollit sit est et non nulla. Eu ad nostrud in pariatur tempor. 
        Consequat occaecat consectetur est deserunt veniam occaecat ad laborum incididunt.`
    },
    shows: [
        {
            title: 'Road to the NFL',
            poster: 'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/1769595/3897605/TIARP15894__01195.1649912398.jpg?c=2',
            episodes: [
                {
                    id: '1',
                    title: 'Pilot'
                },
                {
                    id: '2',
                    title: 'Getting to the NFL'
                }
            ]
        }
    ]
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://open.spotify.com/oembed?url=https://open.spotify.com/episode/7makk4oTQel546B0PZlDM5`)
    console.log(res)
    const data = await res.json()

    return { props: { data } }
}

export default function Profile({ data }) {
    return (
        <div className='bg-gray-100 h-auto w-screen'>
            <Head>
                <title>Profile | Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TopNavigation profile={true} />
            <ProfileMinimalistic user={user} spotify={data} />
        </div>
    )
}
