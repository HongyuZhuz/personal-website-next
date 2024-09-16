
export const ContactInfo = () => {
  return (
    <div className="flex justify-center items-center bg-black py-5 md:py-20">
      <div className="flex w-full max-w-5xl">
        {/* Contact Info Section */}
        <div className="flex-1 bg-red-600 text-white py-40 text-center">
            <div className="flex items-center flex-col">
                <div className="md:text-4xl font-bold mb-4 text-3xl">CONTACT INFO</div>
                <div className="text-lg">
                <p>Email: Hongyu.Zhu.zz@gmail.com</p>
                <p >Tel: +61 0412113528</p>
            </div>
            </div>
          
        </div>
        <div className="md:flex-1 md:flex hidden">
            <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat bg-white"
                style={{ 
                        backgroundImage: 'url("https://hyzpublic.s3.amazonaws.com/Photo/Contact+Info.jpg")',
                    }}
                >
            </div>
            </div>
        </div>
      </div>
  );
};

