import Image from "next/image";
import logoImg from "../public/images/tpcw_logo.webp"
import localFont from "next/font/local"
import ContactInfoModal from "./components/ContactInfoModal";

const futuraBook = localFont({
  src: "../public/fonts/futurabold.otf",
  variable: '--font-futurabook'
})

const lucidaSansUnicode = localFont({
  src: "../public/fonts/lucidasansunicode.ttf",
  variable: '--font-lucidasansunicode'
})


export default async function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-[url(../public/images/underdevelopmentbg.webp)]">
        <div className="hero-content flex-col lg:flex-row bg-black/50 backdrop-blur-2xl rounded-2xl ">
          <Image className="max-w-2xl rounded-lg py-10"
          src={logoImg}
          alt="TCPW Logo"
          />
          <div>
            <h1 className={`${futuraBook.variable} font-futura text-5xl`}>Welcome!</h1>
            <p className={`${lucidaSansUnicode.variable} font-lucida py-6`}>
              Thanks for visiting the TPCW! This website is currently still being developed.
              If you'd like, feel free to contact me for any information.
              This is just a passion project, though! :)
              <br/>
              <br/> 
              (I'll get a domain soon haha)
              <br />
              <br />
              - ikay3at 
            </p>
            <ContactInfoModal/>
          </div>
        </div>
      </div>
    </main> 
  )
}
