import Wrapper from "../components/Wrapper"


const Sermon = () => {
  return (
    <>
      <div className="h-[50vh] sm:h-[80vh] sermon-page text-white">
        <div className="w-full h-full bg-black/60 flex flex-col justify-center items-center gap-6">
          <h1 className="text-3xl md:text-7xl font-bold">OUR SERMONS</h1>
          <p className="text-lg text-center">A video archive of our sermons, available on demand.</p>
        </div>
      </div>
      <Wrapper className="py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1,2,3,4,5,6].map((_, i) =>(
          <div className="border border-zinc-400 aspect-video" key={i}></div>
        ))}
      </Wrapper>
    </>
  )
}

export default Sermon
