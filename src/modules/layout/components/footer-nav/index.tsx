import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <Link href="/">
            <a className="text-xl-semi font-montserrat pl-8">alpha</a>
          </Link>
        </div>
        <p className="text-lg text-center tracking-widest font-montserrat">OWN YOUR STYLE &nbsp;&nbsp; | &nbsp;&nbsp; GO ALPHA</p>
        <div className="text-small-regular grid grid-cols-1 pr-8 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Contact us </span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                alpha park, Intermediate Ring Rd,
              </li>
              <li>
                Domlur, Bengaluru,
              </li>
              <li>
                Karnataka
              </li>
              <li>
                India - 500871
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <div className="scale-75 flex">
          <a target="_blank" rel="noopener" href="https://www.facebook.com/" title="Alpha on Facebook" className="scale-50" >
            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-facebook" viewBox="0 0 32 32"><path fill="#444" d="M18.56 31.36V17.28h4.48l.64-5.12h-5.12v-3.2c0-1.28.64-2.56 2.56-2.56h2.56V1.28H19.2c-3.84 0-7.04 2.56-7.04 7.04v3.84H7.68v5.12h4.48v14.08h6.4z"></path></svg>
            <span className="icon__fallback-text">Facebook</span>
          </a>
          <a target="_blank" rel="noopener" href="https://www.instagram.com/" title="Alpha on Instagram" className="scale-50">
            <svg aria-hidden="true" focusable="false" role="presentation" className="icon icon-instagram" viewBox="0 0 32 32"><path fill="#444" d="M16 3.094c4.206 0 4.7.019 6.363.094 1.538.069 2.369.325 2.925.544.738.287 1.262.625 1.813 1.175s.894 1.075 1.175 1.813c.212.556.475 1.387.544 2.925.075 1.662.094 2.156.094 6.363s-.019 4.7-.094 6.363c-.069 1.538-.325 2.369-.544 2.925-.288.738-.625 1.262-1.175 1.813s-1.075.894-1.813 1.175c-.556.212-1.387.475-2.925.544-1.663.075-2.156.094-6.363.094s-4.7-.019-6.363-.094c-1.537-.069-2.369-.325-2.925-.544-.737-.288-1.263-.625-1.813-1.175s-.894-1.075-1.175-1.813c-.212-.556-.475-1.387-.544-2.925-.075-1.663-.094-2.156-.094-6.363s.019-4.7.094-6.363c.069-1.537.325-2.369.544-2.925.287-.737.625-1.263 1.175-1.813s1.075-.894 1.813-1.175c.556-.212 1.388-.475 2.925-.544 1.662-.081 2.156-.094 6.363-.094zm0-2.838c-4.275 0-4.813.019-6.494.094-1.675.075-2.819.344-3.819.731-1.037.4-1.913.944-2.788 1.819S1.486 4.656 1.08 5.688c-.387 1-.656 2.144-.731 3.825-.075 1.675-.094 2.213-.094 6.488s.019 4.813.094 6.494c.075 1.675.344 2.819.731 3.825.4 1.038.944 1.913 1.819 2.788s1.756 1.413 2.788 1.819c1 .387 2.144.656 3.825.731s2.213.094 6.494.094 4.813-.019 6.494-.094c1.675-.075 2.819-.344 3.825-.731 1.038-.4 1.913-.944 2.788-1.819s1.413-1.756 1.819-2.788c.387-1 .656-2.144.731-3.825s.094-2.212.094-6.494-.019-4.813-.094-6.494c-.075-1.675-.344-2.819-.731-3.825-.4-1.038-.944-1.913-1.819-2.788s-1.756-1.413-2.788-1.819c-1-.387-2.144-.656-3.825-.731C20.812.275 20.275.256 16 .256z"></path><path fill="#444" d="M16 7.912a8.088 8.088 0 0 0 0 16.175c4.463 0 8.087-3.625 8.087-8.088s-3.625-8.088-8.088-8.088zm0 13.338a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 1 1 0 10.5zM26.294 7.594a1.887 1.887 0 1 1-3.774.002 1.887 1.887 0 0 1 3.774-.003z"></path></svg>
            <span className="icon__fallback-text">Instagram</span>
          </a>
       </div>
       <span className="text-xsmall-regular text-gray-500">
          Privacy Policy
        </span>
        <span className="text-xsmall-regular text-gray-500">
          Terms of Use
        </span>
        <span className="text-xsmall-regular text-gray-500">
          Returns
        </span>
        <span className="text-xsmall-regular text-gray-500">
          FAQ
        </span>
      </div>
      <span className="text-xsmall-regular text-center text-gray-500">
          © Copyright 2022 ALPHA
      </span>
    </div>
  )
}

export default FooterNav
