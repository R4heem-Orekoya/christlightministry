import Wrapper from "../components/Wrapper"
import Image from "../assets/image4.jpg"
import SectionHeader from "../components/SectionHeader"

const About = () => {
  return (
    <>
      <div className="h-[50vh] sm:h-[80vh] about-page text-white">
        <div className="w-full h-full bg-black/60 flex flex-col gap-6 items-center justify-center">
          <h1 className="text-3xl md:text-7xl font-bold">ABOUT US</h1>
          <p className="text-lg text-center">A little about us.</p>
        </div>
      </div>
      <Wrapper className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video">
            <img src={Image} alt="about-us image" className="w-full h-full object-cover"/>
          </div>
          <div className="mt-10">
            <SectionHeader>THE LITTLE CHURCH WITH A BIG HEART</SectionHeader>
            <div className="grid gap-6 mt-6 text-base md:text-lg max-w-[70ch] text-zinc-600">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Iste ut incidunt numquam nesciunt veritatis at, maxime eaque 
                sed similique dolore necessitatibus deleniti fuga amet. 
                Obcaecati possimus quaerat eos similique doloribus ab tenetur 
                est neque assumenda unde! Repellendus ea quia dolore saepe 
                quaerat repellat dolorum eligendi qui amet, possimus, suscipit 
                ut autem aperiam voluptate officiis commodi placeat quo, voluptates 
                obcaecati adipisci eos dignissimos. Consequatur dolorum ea repellendus 
                eaque eum id minus, exercitationem facilis voluptates laborum cum harum
                nemo, necessitatibus natus. Eligendi cum pariatur libero excepturi, 
                suscipit autem atque cupiditate error! Debitis sint unde ratione 
                repudiandae voluptatum earum nemo eum perferendis laborum?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Iste ut incidunt numquam nesciunt veritatis at, maxime eaque 
                sed similique dolore necessitatibus deleniti fuga amet. 
                Obcaecati possimus quaerat eos similique doloribus ab tenetur 
                est neque assumenda unde! Repellendus ea quia dolore saepe 
                quaerat repellat dolorum eligendi qui amet, possimus, suscipit 
                ut autem aperiam voluptate officiis commodi placeat quo, voluptates 
                obcaecati adipisci eos dignissimos. Consequatur dolorum ea repellendus 
                eaque eum id minus, exercitationem facilis voluptates laborum cum harum
                nemo, necessitatibus natus. Eligendi cum pariatur libero excepturi, 
                suscipit autem atque cupiditate error! Debitis sint unde ratione 
                repudiandae voluptatum earum nemo eum perferendis laborum?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Iste ut incidunt numquam nesciunt veritatis at, maxime eaque 
                sed similique dolore necessitatibus deleniti fuga amet. 
                Obcaecati possimus quaerat eos similique doloribus ab tenetur 
                est neque assumenda unde! Repellendus ea quia dolore saepe 
                quaerat repellat dolorum eligendi qui amet, possimus, suscipit.
              </p>
              
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default About
