const Services = () => {
    const services = [
      { title: 'HTML', description: 'Frontend Development' },
      { title: 'CSS', description: 'Styling and Layout' },
      { title: 'PHP', description: 'Backend Development' },
      { title: 'Python', description: 'Web Applications' },
      { title: 'Flask', description: 'Web Applications' },
      { title: 'NodeJS', description: 'Web Applications' },
      { title: 'NextJS', description: 'Web Applications' },
      { title: 'Laravel', description: 'Web Applications' },
      { title: 'Django', description: 'Web Applications' },
      { title: 'JavaScript', description: 'Interactive Websites' },
      { title: 'TypeScript', description: 'JavaScript Superset' },
      { title: 'Kivy', description: 'Mobile Applications' },
      { title: 'React Native', description: 'Mobile Applications' },
      { title: 'Ruby', description: 'Web Development' },
      { title: 'Ruby on rails', description: 'Web Applications' },
      { title: 'Rust', description: 'Embedded Systems' },
    ];
  
    return (
      <section id="services" className="py-20 pt-24"> {/* Added pt-24 for padding-top */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Available services that I can work on</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;