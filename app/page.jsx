import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Discover & share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
            </h1>
            <p className="desc text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure consequatur dolorem obcaecati eum repellendus nemo illum, ipsum ipsa sed, autem dolore placeat repudiandae corporis architecto. Molestias dolor voluptatum libero 
            </p>
            <Feed/>
        </section>
    );
};

export default Home;