import { Card } from "@/components/card";
import aboutUsData from "@/data/about-us";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto p-4 apie-mus">
      {aboutUsData.map((section, index) => (
        <div key={index} className="flex mb-8">
          <div className="card flex-1 mr-4">
            <article className="relative w-full h-full p-4 md:p-8 group bg-[#1c1c1e] hover:bg-[#2c2c2e]">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
              </div>
            </article>
          </div>
          <div className="content flex-2 pl-4">
            <h3 className="text-2xl font-semibold">{section.title}</h3>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
      
      <div className="hexagon-container">
        {["jQuery", "CSS", "JavaScript", "Nuxt.js", "HTML", "Bootstrap", "Vue.js", "Webpack"].map((tech, index) => (
          <div key={index} className="hexagon">
            <span>{tech}</span>
          </div>
        ))}
      </div>

      <div className="team-section mt-12">
        <h2 className="text-3xl font-bold mb-8">Mūsų komanda</h2>
        <div className="team-members flex gap-8">
          {["Jonas Kazlauskas", "Petras Petraitis", "Ona Onute"].map((name, index) => (
            <div key={index} className="team-member text-center">
              <div className="w-32 h-32 bg-gray-500 mb-4 mx-auto rounded-full"></div>
              <h3 className="text-xl font-medium">{name}</h3>
              <div className="social-icons flex justify-center mt-2">
                <a href="#" className="mx-2"><img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6"/></a>
                <a href="#" className="mx-2"><img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6"/></a>
                <a href="#" className="mx-2"><img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6"/></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}