'use client';

interface CareerItemProps {
  role: string;
  dateRange: string;
  company: string;
  description: string;
}

interface CareerItemProps {
  role: string;
  dateRange: string;
  company: string;
  description: string;
}

const CareerItem: React.FC<CareerItemProps> = ({ role, dateRange, company, description }) => (
  <div className="border-l-4 border-red-500 pl-4 mb-6">
    <h3 className="text-xl text-red-500 font-bold mt-2">{role}</h3>
    <p className="text-gray-500">{dateRange}</p>
    <p className="font-bold">{company}</p>
    <div className="text-gray-300 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1" dangerouslySetInnerHTML={{ __html: description }} />
  </div>
);

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header className="bg-black text-white mt-8 ml-8">
    <div className="ml-3 md:ml-0">
      <p className="text-red-500 text-xl font-bold ">BACKGROUND</p>
      <h2 className="text-4xl md:mb-4">{title}</h2>
    </div>
  </header>
);

interface CareerSectionProps {
  careerData: CareerItemProps[];
}

const CareerSection: React.FC<CareerSectionProps> = ({ careerData }) => {

  return (
    <section className="p-8">
      {careerData.map((c) => (
        <CareerItem
          key={c.company}
          role={c.role}
          dateRange={c.dateRange}
          company={c.company}
          description={c.description}
        />
      ))}
    </section>
  );
};



export interface MyCareerProps {
  careerData: CareerItemProps[];
}

export const MyCareer: React.FC<MyCareerProps> = ({ careerData }) => (
  <div id="career">
    <div className="career-page min-h-screen bg-black text-white">
      <div className="flex flex-col max-w-5xl mx-auto min-h-screen">
        <Header title="My Career" />
        <CareerSection careerData={careerData} />
      </div>
    </div>
  </div>
);
  