export default function Projects() {
  return (
    <section id="projects" className="bg-white py-16 absoulte overflow-hidden z-0 ">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-[#264653] mb-8 underline decoration-yellow-300">Our Projects</h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 md:gap-3 place-items-center">
          
          {/* Project 1 */}
          <div className="p-4 bg-[#f5f5f5] shadow-lg rounded-lg relative z-10">
            <div className=" rounded-lg">
              <img 
                src="/assets/images/image5.jpg" 
                alt="Project 1"
                className="w-full h-auto rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-70"
              />
            </div>
            <h3 className="text-xl font-bold text-[#264653] mt-4">Project 1</h3>
          
          </div>

          {/* Project 2 */}
          <div className="p-4 bg-[#f5f5f5] shadow-lg rounded-lg relative z-10">
            <div className=" rounded-lg">
              <img 
                src="/assets/images/image4.jpg"
                alt="Project 2"
                className="w-full h-auto rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-70"
              />
            </div>
            <h3 className="text-xl font-bold text-[#264653] mt-4">Project 2</h3>

          </div>

          {/* Project 3 */}
          <div className="p-4 bg-[#f5f5f5] shadow-lg rounded-lg relative ">
            <div className=" rounded-lg">
              <img 
                src="/assets/images/image3.jpg"
                alt="Project 3"
                className="w-full h-auto rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-70"
              />
            </div>
            <h3 className="text-xl font-bold text-[#264653] mt-4">Project 3</h3>
            
          </div>

          {/* Project 4 */}
          <div className="p-4 bg-[#f5f5f5] shadow-lg rounded-lg relative z-10">
            <div className=" rounded-lg">
              <img 
                src="/assets/images/image2.jpg"
                alt="Project 4"
                className="w-full h-auto rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:opacity-70"
              />
            </div>
            <h3 className="text-xl font-bold text-[#264653] mt-4">Project 4</h3>
        
          </div>

        </div>
      </div>
    </section>
  );
}
