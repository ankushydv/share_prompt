import Feed from "@/components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompt</span>
      </h1>
      <p className="desc text-center">
        This power by OpenAi and Feels like Chagpt Older Father 
      </p>

       <Feed/>
    </section>
  );
}
