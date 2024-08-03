// app/apie-mus/page.tsx
import React from 'react';
import { Card } from '@/components/card'; // Ensure this path and casing is correct
import aboutUsData from '@/data/about-us'; // Ensure this path is correct

const ApieMus: React.FC = () => {
  return (
    <div className="apie-mus">
      {aboutUsData.map((section, index) => (
        <div className="flex" key={index}>
          <Card className="card">
            <article className="relative w-full h-full p-4 md:p-8 group bg-[#1c1c1e] hover:bg-[#2c2c2e]">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">{section.title}</div>
              </div>
            </article>
          </Card>
          <div className="content">
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const MesDirbameSu: React.FC = () => {
  return (
    <div className="hexagon-container">
      {['Front-end', 'Testing Tools', 'Cloud', 'CMS/E-commerce', 'CI/CD', 'Back-end', 'Infrastructure', 'Framework', 'Data'].map((title, index) => (
        <div className="hexagon" key={index}>
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};

const MūsųKomanda: React.FC = () => {
  const teamMembers = [
    { name: 'Jonas Jonaitis', position: 'CEO' },
    { name: 'Petras Petraitis', position: 'CTO' },
    { name: 'Ona Onaitė', position: 'CFO' },
  ];

  return (
    <div className="team-section">
      <h2>Mūsų Komanda</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="portrait">
              <img src={`/images/team/${member.name.replace(/ /g, '-').toLowerCase()}.jpg`} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <div className="social-icons">
              <a href={`https://www.linkedin.com/in/${member.name.replace(/ /g, '-').toLowerCase()}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div>
      <ApieMus />
      <MesDirbameSu />
      <MūsųKomanda />
    </div>
  );
};

export default Page;