import Feed from "@components/Feed";

const Home = () => {
  return (
    <div>
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Promptify is an open-source AI prompting 
        tool made by Paul for the modern world to discover,
        create and share creative prompts.
      </p>

      <Feed />
    </section>
    </div>
  )
}

export default Home
