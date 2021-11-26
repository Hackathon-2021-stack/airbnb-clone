import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData,cardData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb 2.O</title>
        <link rel="icon" href='https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_airbnb-512.png' />
      </Head>

      {/* Header */}
      <Header/>

      {/* Banner */}
      <Banner/>

      {/* main */}
      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        
        {/* Small Card Section */}
        <section className="pt-6 ">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>          
          {/* pull data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map(item => (
            <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance}/>
          ))}
          </div>
          
        </section>
        
        {/* MediumCard */}
        <section className="">
          <h2 className='py-8 text-4xl font-semibold'>Live Anywhere</h2>
          <div className="flex p-3 -ml-3 space-x-3 overflow-scroll scrollbar-hide">
          {cardData?.map(item =>(
            <MediumCard className="" key={item.img} img={item.img} title={item.title}/>
          ))}
          </div>
        </section>

        {/* LargeCard */}
        <LargeCard
        img='https://links.papareact.com/4cj'
        title='The Greatest Outdoors'
        description='Wishlists curated by airbnb.'
        ButtonTitle='Get Inspired'
        />
        
      </main>

      <Footer/>

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json())

  const cardData = await fetch('https://links.papareact.com/zp1').then(res => res.json())
  
  return {
    props:{
      exploreData,
      cardData
    }
  }
}