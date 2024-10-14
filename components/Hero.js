import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20 pt-24">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold mb-4">David Nzube</h1>
          <h2 className="text-3xl text-gray-600 mb-6">FullStack Web Developer</h2>
          <p className="text-xl mb-8">I can deliver results that exceed your expectations.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
            Hire Me Now
          </button>
        </div>
        <div className="w-1/2">
          <Image 
            src="/images/034A2C65-06B8-42E2-8F22-35258C096A4A-removebg.png"
            alt="David Nzube"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;