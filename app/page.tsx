import Image from "next/image";
import { socialLinks } from "./config";
import { SiJavascript, SiPython, SiReact, SiDjango, SiExpress, SiBootstrap, 
  SiMongodb, SiMysql, SiGooglecloud, SiAmazon, 
  SiGithubactions, SiKubernetes, SiDocker } from 'react-icons/si';

export default function Page() {
  return (
    <section>
      
       <a href={socialLinks.linkedin} target="_blank">
    <Image
      src="/hariprofile.jpeg"
      alt="Profile photo"
className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
      unoptimized
      width={160} 
      height={160}
      priority
    />
  </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
          Software Engineer
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        
        <p>
        Software Engineer with 3+ years of experience in full-stack development, specializing in building scalable web applications and microservices. Proficient in JavaScript, React.js, Node.js, and MongoDB, with a strong understanding of cloud technologies, DevOps practices, and a strong background in data structures and algorithms.
        </p>
        
        <p>
        Master's in Cloud Computing from National College of Ireland, with expertise in cloud architecture, DevOps, and scalable cloud programming. <a 
  href="https://www.credly.com/badges/19636202-f7fb-4747-9c57-614fdb47af08/public_url" 
  target="_blank"
  className="text-blue-600 dark:text-blue-400 hover:underline"
>
  Certified Professional Cloud Developer from Google Cloud Platform
</a>.
        </p>
        <p>
    Proven track record of delivering high-quality applications, optimizing performance, and enhancing user experience. Strong problem-solving skills, with a focus on innovation and continuous learning.
  </p>  
      </div>

<div className="mt-8">
  <h2 className="text-xl font-medium mb-4">Technical Skills</h2>
  
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="flex flex-col items-center space-y-2 p-4 rounded-lg 
  bg-white/80 dark:bg-neutral-800/80 
  backdrop-blur-sm 
  shadow-lg
  hover:transform hover:scale-105
  transition-all duration-300 ease-in-out">
      <h3 className="text-sm font-medium">Languages</h3>
      <div className="flex space-x-3">
        <SiJavascript className="w-8 h-8 text-yellow-400" />
        <SiPython className="w-8 h-8 text-blue-500" />
      </div>
    </div>

    <div className="flex flex-col items-center space-y-2 p-4 rounded-lg 
  bg-white/80 dark:bg-neutral-800/80 
  backdrop-blur-sm 
  shadow-lg
  hover:transform hover:scale-105
  transition-all duration-300 ease-in-out">
      <h3 className="text-sm font-medium">Frameworks</h3>
      <div className="flex space-x-3">
        <SiReact className="w-8 h-8 text-blue-400" />
        <SiDjango className="w-8 h-8 text-green-600" />
        <SiExpress className="w-8 h-8 text-gray-600" />

      </div>
    </div>

    <div className="flex flex-col items-center space-y-2 p-4 rounded-lg 
  bg-white/80 dark:bg-neutral-800/80 
  backdrop-blur-sm 
  shadow-lg
  hover:transform hover:scale-105
  transition-all duration-300 ease-in-out">
      <h3 className="text-sm font-medium">Databases</h3>
      <div className="flex space-x-3">
        <SiMongodb className="w-8 h-8 text-green-500" />
        <SiMysql className="w-8 h-8 text-blue-600" />
      </div>
    </div>

    <div className="flex flex-col items-center space-y-2 p-4 rounded-lg 
  bg-white/80 dark:bg-neutral-800/80 
  backdrop-blur-sm 
  shadow-lg
  hover:transform hover:scale-105
  transition-all duration-300 ease-in-out">
      <h3 className="text-sm font-medium">Cloud & DevOps</h3>
      <div className="flex space-x-3">
        <SiGooglecloud className="w-8 h-8 text-blue-500" />
        <SiKubernetes className="w-8 h-8 text-blue-600" />
        <SiDocker className="w-8 h-8 text-blue-400" />
      </div>
    </div>
  </div>
</div>

    </section>
  );
}
