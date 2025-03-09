import { technologies } from "@/data";

const Technologies = () => (
  <section id="tech" className="py-12 bg-black-1 text-white">
    <div className="container mx-auto px-6">
      <div className="border-t-2 border-gray-700 my-6"></div>
      <h2 className="text-5xl font-bold text-center mb-4">Technologies</h2>
      <p className="text-center text-gray-400 mb-8">
        I've worked with a range of technologies in the web development world.
        From Back-end to Design.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {technologies.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="p-6 bg-black-2 rounded-lg flex flex-col items-center text-center shadow-lg transition-transform transform hover:scale-105"
          >
            <img src={icon} alt="file" width={34} height={34} className="py-4" />
            <h4 className="text-xl font-semibold">{title}</h4>
            <p className="text-gray-400 mt-2">{description}</p>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-gray-700 my-6"></div>
    </div>
  </section>
);

export default Technologies;
