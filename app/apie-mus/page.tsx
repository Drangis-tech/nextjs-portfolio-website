const techData = [
  { name: "HTML", category: "Front-end", color: "#E34F26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", category: "Front-end", color: "#1572B6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", category: "Front-end", color: "#F7DF1E", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Vue.js", category: "Framework", color: "#42B883", url: "https://vuejs.org/" },
  { name: "Nuxt.js", category: "Framework", color: "#00C58E", url: "https://nuxtjs.org/" },
  { name: "Bootstrap", category: "Framework", color: "#7952B3", url: "https://getbootstrap.com/" },
  { name: "Webpack", category: "Framework", color: "#8DD6F9", url: "https://webpack.js.org/" },
  { name: "jQuery", category: "Front-end", color: "#0769AD", url: "https://jquery.com/" },
  { name: "PHPUnit", category: "Testing Tools", color: "#4F5B93", url: "https://phpunit.de/" },
  { name: "Postman", category: "Testing Tools", color: "#FF6C37", url: "https://www.postman.com/" },
  { name: "AWS", category: "Cloud", color: "#FF9900", url: "https://aws.amazon.com/" },
  { name: "Google Cloud", category: "Cloud", color: "#4285F4", url: "https://cloud.google.com/" },
  { name: "WordPress", category: "Back-end", color: "#21759B", url: "https://wordpress.org/" },
  { name: "GitHub", category: "Back-end", color: "#181717", url: "https://github.com/" },
  { name: "Python", category: "Back-end", color: "#3776AB", url: "https://www.python.org/" },
  { name: "PHP", category: "Back-end", color: "#777BB4", url: "https://www.php.net/" },
  { name: "Docker", category: "Data", color: "#2496ED", url: "https://www.docker.com/" },
  { name: "Laravel", category: "Back-end", color: "#FF2D20", url: "https://laravel.com/" },
  { name: "MySQL", category: "Data", color: "#4479A1", url: "https://www.mysql.com/" },
  { name: "Elasticsearch", category: "Data", color: "#005571", url: "https://www.elastic.co/" },
];

const ApieMus: React.FC = () => {
  const hexagonGridStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px',
    position: 'relative'
  };

  const hexagonStyle: React.CSSProperties = {
    width: '100px',
    height: '55px',
    position: 'relative',
    margin: '27.5px 5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '14px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
  };

  const hexagonBeforeAfterStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    width: '0',
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent'
  };

  const hexagonBeforeStyle: React.CSSProperties = {
    ...hexagonBeforeAfterStyle,
    bottom: '100%',
  };

  const hexagonAfterStyle: React.CSSProperties = {
    ...hexagonBeforeAfterStyle,
    top: '100%',
  };

  const renderHexagons = (category: string) => {
    return techData.filter(tech => tech.category === category).map((tech, index) => (
      <div
        key={index}
        style={{
          ...hexagonStyle,
          backgroundColor: 'rgba(44, 44, 46, 0.8)',
          borderBottom: `27.5px solid rgba(44, 44, 46, 0.8)`,
          borderTop: `27.5px solid rgba(44, 44, 46, 0.8)`,
        }}
        onClick={() => window.open(tech.url, '_blank')}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = tech.color;
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(44, 44, 46, 0.8)';
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
        }}
        title={tech.name}
      >
        {tech.name}
        <div style={{ ...hexagonBeforeStyle, borderBottomColor: tech.color }}></div>
        <div style={{ ...hexagonAfterStyle, borderTopColor: tech.color }}></div>
      </div>
    ));
  };

  return (
    <div className="relative pb-16 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Apie Mus</h2>
          <p className="mt-4 text-zinc-400">
            Sužinokite daugiau apie mūsų komandą, viziją ir vertybes, kurios veda mūsų misiją.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="apie-mus">
          {aboutUsData.map((section, index) => (
            <div key={index} className="flex">
              <Card className="card">
                <article className="relative w-full h-full p-4 md:p-8 group bg-[rgba(28, 28, 30, 0.8)] hover:bg-[rgba(44, 44, 46, 0.8)]"> {/* Making the cards semi-transparent */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      <span>{section.title}</span>
                    </div>
                  </div>

                  <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {section.description}
                  </p>
                </article>
              </Card>
              <div className="content">
                <h3 className="text-xl font-bold text-zinc-100">{section.title}</h3>
                <p className="mt-2 text-zinc-400">{section.detailedText}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Mes dirbame su</h2>

          <div style={{ marginBottom: '20px' }}>
            <h3 className="text-xl font-bold text-zinc-100">Front-end</h3>
            <div style={hexagonGridStyle}>
              {renderHexagons("Front-end")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 className="text-xl font-bold text-zinc-100">Framework</h3>
            <div style={hexagonGridStyle}>
              {renderHexagons("Framework")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 className="text-xl font-bold text-zinc-100">Testing Tools</h3>
            <div style={hexagonGridStyle}>
            {renderHexagons("Testing Tools")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 className="text-xl font-bold text-zinc-100">Cloud</h3>
            <div style={hexagonGridStyle}>
              {renderHexagons("Cloud")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 className="text-xl font-bold text-zinc-100">Back-end</h3>
            <div style={hexagonGridStyle}>
              {renderHexagons("Back-end")}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 className="text-xl font-bold text-zinc-100">Data</h3>
            <div style={hexagonGridStyle}>
              {renderHexagons("Data")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApieMus;