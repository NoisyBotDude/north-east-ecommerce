interface CareItem {
    icon: string; // Path to the icon
    title: string;
    description: string;
  }
  
  interface WhatWeCareAboutProps {
    items: CareItem[];
  }
  
  const WhatWeCareAbout: React.FC<WhatWeCareAboutProps> = ({ items }) => {
    return (
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What We Care About</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md"
              >
                {/* Icon */}
                <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100">
                  <img src={item.icon} alt={item.title} className="w-8 h-8" />
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                {/* Description */}
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhatWeCareAbout;