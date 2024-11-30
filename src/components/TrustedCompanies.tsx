export function TrustedCompanies() {
  const companies = [
    {
      name: "Volkswagen",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg"
    },
    {
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
    },
    {
      name: "Cisco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
    },
    {
      name: "Vimeo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Vimeo_Logo.svg"
    },
    {
      name: "P&G",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Procter_%26_Gamble_logo.svg"
    },
    {
      name: "HP Enterprise",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg"
    },
    {
      name: "Citi",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Citi_logo.svg"
    },
    {
      name: "Ericsson",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Ericsson_logo.svg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Trusted by over 16,000 companies and millions of learners around the world
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company) => (
            <div 
              key={company.name}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}