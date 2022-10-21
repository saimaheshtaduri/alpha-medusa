import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[100vh] w-full relative">
       <Image
        src="/home-img.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        objectPosition="top"
        alt="Photo by Godisable Jacob: https://www.pexels.com/photo/woman-in-blue-and-grey-suit-leaning-on-brown-wooden-wall-953260/"
        className="absolute inset-0"
        draggable="false"
      />
      <div className=" absolute font-nunito right-20 text-white inset-0 z-100 flex flex-col justify-self-end justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <p className="border-4 pl-6 font-abril text-7xl text-right float-right mb-4 drop-shadow-md shadow-black">
          Summer  <br/> Style !
        </p>
        <p className="text-base-regular text-lg max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          One stop hub for all the fashion seekers. A fashion selection lovingly handpicked for you, sealed with personal touch. <br/>
          check out the best deals.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
    </div>
  )
}

export default Hero
