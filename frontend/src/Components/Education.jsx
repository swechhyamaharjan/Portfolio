import React from 'react'

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor in Information Technology",
      program: "BSc (Hons) Computer Science",
      year: "2022-2025",
      institution: "Herald College Kathmandu, Naxal, Kathmandu"
    },
    {
      degree: "Higher Level Education",
      program: "",
      year: "2019-2021",
      institution: "Trinity International College, Dillibazar, Kathmandu"
    },
    {
      degree: "Secondary Level Education",
      program: "",
      year: "2010-2019",
      institution: "Universal College Preparatory School, Baluwatar, Kathmandu"
    }
  ]

  return (
    <section className="min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 pt-24 sm:pt-28 md:pt-32 pb-20 bg-gray-950">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
        </div>

        {/* Education Items */}
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-900 border-2 border-purple-500/30 rounded-2xl p-8 shadow-2xl hover:border-purple-500 hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-purple-300 mb-2">
                    {edu.degree}
                  </h3>
                  {edu.program && (
                    <p className="text-xl text-white font-medium mb-2">
                      {edu.program}
                    </p>
                  )}
                </div>
                <span className="text-lg font-bold text-purple-400 md:ml-4 mt-2 md:mt-0">
                  {edu.year}
                </span>
              </div>
              <p className="text-lg text-gray-400">
                {edu.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education