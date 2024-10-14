import Image from 'next/image';

const projects = {
  "Vidbuy": ['vidbuy.png', 'Online marketplace which connects buyers and sellers globally', 'https://www.github.com/DavidNzube101/vidbuy'],
  "Poel": ['Poel_Wide.PNG', 'A really helpful tool for Python-Flask Developer. It automatically creates/generates the files needed for a Standard Flask App.', 'https://www.github.com/DavidNzube101/Poel'],
  "VertexxDB": ['vertexxdb.png', 'A remote based JSON oriented database management system. VertexxDB uses SecJSON to secure data.', 'https://www.github.com/DavidNzube101/VertexxDB'],
  "WRLD": ['WRLD.png', 'A static web development tool that web developers to quickly create, manage, test and maintain static websites.', 'https://www.github.com/DavidNzube101/WRLD'],
  "PaperShare": ['Ps.png', 'A Learning Management Tool that allows teachers to give out homeworks/assignments to students, view them, record them and see insights.', 'https://www.github.com/DavidNzube101/PaperShare']
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Selected works 2020-Present</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(projects).map(([title, [image, description, link]]) => (
            <div key={title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src={`/images/Project Pics/${image}`}
                alt={title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;