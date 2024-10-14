const Stats = () => {
    const stats = [
      { number: '51+', description: 'Projects Completed' },
      { number: '14+', description: 'Satisfied Clients' },
      { number: '4+', description: 'Years of Experience' },
    ];
  
    return (
      <section className="bg-gray-100 py-20 pt-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Stats;