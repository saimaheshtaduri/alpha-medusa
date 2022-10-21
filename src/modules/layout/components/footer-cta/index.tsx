import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const FooterCTA = () => {
  return (
    <div className="m-auto w-full">
      <p className="text-lg text-center tracking-widest py-12 font-montserrat">OWN YOUR STYLE &nbsp;&nbsp; | &nbsp;&nbsp; GO ALPHA</p>
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div>
          <p className="text-2xl-semi font-montserrat">Shop the latest styles</p>
          <p className="text-base-regular py-8 font-nunito text-lg max-w-[32rem] mb-6 drop-shadow-md shadow-black">
              We love all of our beautiful brands here at alpha which are made exclusively to bring out your style. We have made it easy for you to find all the style you need at one place. 
              Enjoy being alpha !
          </p>
          <div className="mt-6">
            <UnderlineLink href="/store">Explore products</UnderlineLink>
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
          <Image
            src="/home-img2.jpg"
            alt="Photo by cottonbro: https://www.pexels.com/photo/man-in-a-sweater-and-black-pants-6626903/"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </div>
      <div className="border-gray-400 border-t-8 py-12 bg-gray-200 content-container flex flex-col justify-center align-center">
        <h1 className="tracking-wide font-dela font-extrabold" style={{
          background: 'url("https://thumbs.gfycat.com/SneakyAntiqueDolphin.webp") no-repeat', 
          WebkitTextFillColor: "transparent",
          fontSize: 140,
          width: "100%",
          height: "100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          backgroundSize: "cover",
          textAlign: "center"
        }}>
          GO BEYOND !
        </h1>
    </div>
    </div>
  )
}

export default FooterCTA
