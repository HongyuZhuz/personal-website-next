

export const AboutMe = () => {
    return (
      <section className="about-me-section w-full bg-black" id="about-me">
        <div className="flex md:flex-row flex-col justify-center ">
            <ProfilePic />
            <WhoIAm /> 
        </div>
      </section>
    );
  };

  const ProfilePic = () =>{
    return(
        <>
        <div className="justify-self-center md:justify-self-end">
            <img src="https://hyzpublic.s3.amazonaws.com/My-profile.webp" alt="Profile" className=" border-2 border-red-500 mr-10 ml-10 mt-20 w-80" width={300} height={300}/>
        </div>
        </> 
    )
  }

  const WhoIAm = () =>{
    return(
        <div className=" md:basis-1/2 bg-black  text-white p-10 max-w-md justify-self-cente">
            <div className="mb-4">
                <h2 className="text-xl mb-2 text-red-500 md:text-2xl font-bold">ABOUT ME</h2>
                <h1 className="text-4xl font-bold mb-4 md:text-5xl">Who I am?</h1>
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