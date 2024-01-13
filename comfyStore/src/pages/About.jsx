const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          Minimal Project
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        This project serves as a comprehensive endeavor to delve deeper into
        various topics covered in React. Through this initiative, I've gained
        profound insights into the intricate workings of React, dispelling
        common misconceptions that front-end development is merely
        surface-level. This project underscores the complexity and depth
        inherent in React development. For further insights into my learning
        journey, feel free to follow me on GitHub.
      </p>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">- Deepak</p>
    </>
  );
};
export default About;
