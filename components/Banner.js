import Image from 'next/image'
const Airbnb_Banner = require('../images/airbnb-Banner.webp')

const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
            src={Airbnb_Banner}
            layout='fill'
            objectFit='cover'
            />
            <div className="absolute w-full text-center top-1/2">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
                <button className="px-10 py-4 my-3 font-bold text-purple-500 transition bg-white rounded-full shadow-md hover:shadow-xl active:scale-90 decoration-150">I'm Flexible</button>
            </div>
        </div>
    )
}

export default Banner
