interface CareerItemProps {
    role:string;
    dateRange:string;
    company:string;
    description:JSX.Element |string;
}


const myCareer:Array<CareerItemProps> = [
  {
    role:"Backup Engineer",
    dateRange:"11.2024 - Now",
    company:"TIMG Pty Ltd.",
    description:
    <ul>
    <li>Provided Level 1 and 2 support, resolving issues within 4-hour response time and maintaining sub-2-day RPO.</li>
        <li>Designed and implemented data protection solutions across VMware, Hyper-V, Azure, and AWS environments.</li>
        <li>Installed, configured, and maintained backup systems, ensuring compliance with client retention policies.</li>
        <li>Led DR projects, conducted recovery testing, and developed reports to monitor protection status.</li>
        <li>Documented systems, managed change requests, and provided after-hours support as required.</li>
  </ul>
},
{
    role:"Digitization assistant",
    dateRange:"08.2023 - 11.2024",
    company:"TIMG Pty Ltd.",
    description:
    <ul>
    <li>Developed and optimized an AI-based chatbot for customer support, increasing response accuracy by 40% and reducing response time by 30%. Designed and implemented scalable solutions to improve customer engagement and support.</li>
    <li>Managed and optimized a WordPress website, resolving technical issues and improving content management efficiency by 50%. Led efforts to enhance website performance, speed, and user experience.</li>
    <li>Led final-stage QA testing for customer-facing products, ensuring both design and data accuracy before release. Significantly reduced post-deployment issues through attention to detail and commitment to quality.</li>
  </ul>
},
{
    role:"Graphic Designer & Photographer",
    dateRange:"01.2021 - 08.2023",
    company:"MAXWELL",
    description:
    <ul>
    <li>Designed visual materials like logos and brochures, showcasing an eye for detail and design aesthetics.</li>
    <li>Managed post-production editing, demonstrating proficiency in Adobe Photoshop and visual storytelling.</li>
  </ul>
},
{
    role:"Developer",
    dateRange:"03.2022 - 11.2022",
    company:"Anti Chaos Solutions Pty Ltd.",
    description:
    <ul>
        <li>Maintained and optimized high-traffic WordPress websites, ensuring optimal performance, security, and user experience. Utilized advanced WordPress functionalities and plugins to improve loading speeds and overall site efficiency.</li>
        <li>Extensively used WordPress as a headless CMS, leveraging its API to build flexible, scalable front-end solutions with frameworks like React. This approach enhanced scalability and provided clients with a more personalized and efficient content management experience.</li>
        <li>Spearheaded the development of Python scripts in Lexis Affinity, significantly enhancing automation efficiency in managing customer needs, mass mailing, contract changes, and document processing</li>
        <li>Offered expert recommendations on software utilization, upgrades, and migration with a specific focus on systems design, messaging tools, software libraries, workflow management platforms, and databases, contributing to the optimization of system operations and workflow efficiency</li>
    </ul>
},
{
    role:"Web Developer internship",
    dateRange:"11.2021 - 02.2022",
    company:"On9 Pty Ltd.",
    description:
    <ul>
        <li>Led the development of several web projects such as Grasschain, Lumi Skin Clinic, and Inbound Construction Company, delivering bespoke solutions tailored to each business`s specific needs.</li>
        <li>Conceptualized and executed UI/UX designs for three websites, receiving positive feedback and commendation from clients for user-friendly and aesthetically pleasing interfaces.</li>
        <li>Worked closely with clients to understand their business requirements, translating their needs into functional and effective web designs.</li>
    </ul>
},
]

// 定义 Header 组件的属性类型
interface HeaderProps {
    title: string;
  }
  
  // Header 组件
  const Header: React.FC<HeaderProps> = ({ title }) => (
    <header className="bg-black text-white mt-8 ml-8">
      <div className="ml-3 md:ml-0">
            <p className="text-red-500 text-xl font-bold ">BACKGROUND</p>
            <h2 className="text-4xl md:mb-4">{title}</h2>
        </div>
    </header>
  );
  

  
  // CareerItem 组件
  const CareerItem: React.FC<CareerItemProps> = ({ role, dateRange, company, description }) => (
    <div className="border-l-4 border-red-500 pl-4 mb-6">
      <h3 className="text-xl text-red-500 font-bold mt-2">{role}</h3>
      <p className="text-gray-500">{dateRange}</p>
      <p className="font-bold">{company}</p>
      <div className="text-gray-300">{description}</div>
    </div>
  );
  
  // CareerSection 组件，不需要特定的属性
  const CareerSection: React.FC = () => (
    <section className="p-8">
      {myCareer.map(c=>(<CareerItem key={c.company} role ={c.role} dateRange = {c.dateRange} company= {c.company} description={c.description}/>))}
    </section>
  );
  
  // 页面组件
  const CareerPage: React.FC = () => (
    <div className="career-page min-h-screen bg-black text-white">
        <div className="flex flex-col  max-w-5xl mx-auto min-h-screen">
            <Header title="My Career" />
            <CareerSection/>
                
        </div>
    </div>
  );
  
  // App 组件，作为应用程序的根组件
  export const MyCareer: React.FC = () => (
    <div id="career">
      <CareerPage />
    </div>
  );
  