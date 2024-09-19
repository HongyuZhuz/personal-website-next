import Image from "next/image";

export const AboutMe = () => {
    return (
      <section className="about-me-section w-full bg-black" id="about-me">
        <div className="flex md:flex-row flex-col justify-center content-center">
            <ProfilePic />
            <WhoIAm /> 
        </div>
      </section>
    );
  };

  const ProfilePic = () =>{
    return(
        <>
        <div className="flex justify-center">
          <Image 
            src="https://hyzpublic.s3.amazonaws.com/My-profile.webp" 
            alt="Profile" 
            width={320} 
            height={120} 
            className="border-2 border-red-500 mx-10 mb-0 mt-10 md:my-20 max-w-80"
          />
        </div>
        </> 
    )
  }

  const WhoIAm = () =>{
    return(
        <div className=" md:basis-1/2 bg-black  text-white p-10 flex md:max-w-md justify-center">
            <div className="mb-4 md:max-w-md max-w-80">
                <h2 className="text-xl mb-2 text-red-500 md:text-2xl font-bold">ABOUT ME</h2>
                <h1 className="text-4xl font-bold mb-4 md:text-5xl">Who am I ?</h1>
                <p className="text-lg mb-4 text-red-500">Outstanding learning ability and full of potential</p>
                <p className="text-sm mb-4 md:text-lg">Blending a Bachelor&apos;s in Landscape Architecture with a Master&apos;s in Computing, 
                    I am an imaginative programmer ready to bring your vision to life. 
                    My unique mix of creative and technical acumen allows me to craft digital solutions that are not only efficient but also aesthetically engaging. 
                    As a quick learner with a diverse range of interests, 
                    I thrive in new challenges and adapt swiftly to emerging trends.
                     If you&apos;re seeking a resourceful and inventive individual who can infuse your projects with a fresh perspective, let&apos;s connect!</p>
                
            </div>
        </div>

    )
  }