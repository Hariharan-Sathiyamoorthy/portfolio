import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Professional experience timeline",
};

export default function Profile() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">My Journey</h1>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {/* Education */}
    <div className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2024 - Jan 2025</time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Master of Science in Cloud Computing</h3>
      <h4 className="text-sm text-gray-500 dark:text-gray-400">National College of Ireland • Dublin, Ireland</h4>
      <ul className="mt-4 space-y-2 pl-4">
        <li className="text-base font-normal text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-900 dark:text-white">Cloud Architecture: </span>
          Distributed systems design, multi-cloud solutions, serverless architectures
        </li>
        <li className="text-base font-normal text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-900 dark:text-white">Cloud DevOpsSec: </span>
          CI/CD pipelines, security automation, infrastructure as code
        </li>
        <li className="text-base font-normal text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-900 dark:text-white">Cloud Platform Programming: </span>
          AWS, Azure, GCP service integration and development
        </li>
        <li className="text-base font-normal text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-900 dark:text-white">Scalable Cloud Programming: </span>
          Microservices architecture, container orchestration, high availability
        </li>
        <li className="text-base font-normal text-gray-500 dark:text-gray-400">
          <span className="font-medium text-gray-900 dark:text-white">Fog and Edge Computing: </span>
          Edge device management, IoT integration, distributed computing
        </li>
      </ul>
    </div>
        {/* Cholamandalam */}
        <div className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Apr 2022 - Nov 2023</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer</h3>
          <h4 className="text-sm text-gray-500 dark:text-gray-400">Cholamandalam Investment and Finance • Chennai, India</h4>
          <ul className="mt-4 space-y-2 pl-4">
            <li className="text-base font-normal text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-900 dark:text-white">Product Development: </span>
              Created several front-end apps using React.js and Redux and worked with the UI team to
create and build a flexible user interface that made the experience more enjoyable for everyone. Built scalable
microservices using Node.js on the backend, ensuring robust and efficient processing for a growing user base.
Engineered database designs in MongoDB that are resilient and highly available, which helped improve system
speed, dependability, and data security
            </li>
            <li className="text-base font-normal text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-900 dark:text-white">Performance Optimization: </span>
              ptimized application performance through responsive design and integrated
Apache Kafka for efficient messaging and data transfer, resulting in scalability and reliability.
            </li>
            <li className="text-base font-normal text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-900 dark:text-white">Deployment & DevOps: </span>
              Deployed and managed the application on AWS using Docker and Kubernetes, and
implemented a CI/CD pipeline with automated testing, including unit, integration, and end-to-end test cases..
            </li>
            <li className="text-base font-normal text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-900 dark:text-white">
              Customer Acquisition & Revenue Growth
              </span>
              Contributed significantly to customer acquisition, retention, and
              revenue growth by delivering a high-quality, user-centric mobile application
            </li>
          </ul>
        </div>

        {/* Intromagic */}
        <div className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2022 - Apr 2022</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer</h3>
          <h4 className="text-sm text-gray-500 dark:text-gray-400">Intromagic • Bangalore, India</h4>
          <ul className="mt-4 space-y-2 pl-4">
            <li className="text-base font-normal text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-900 dark:text-white">API Development: </span>
              Worked as a Backend Developer, integrating and leveraging
Google Drive API to build scalable and efficient backend systems. Designed and implemented RESTful APIs to
ensure seamless file storage, retrieval, and management, while optimizing performance to handle high traffic loads.
            </li>
            <li className="text-base font-normal text-gray-500 dark:text-gray-400">
              <span className="font-medium text-gray-900 dark:text-white">AI Implementation: </span>
              Designed and developed an AI model for video analysis, enabling advanced data
extraction and insights from video content. Utilized the MorphCast SDK and computer vision techniques to
process and analyze video data in real-time, delivering actionable insights and enhancing user engagement for
business applications
            </li>
          </ul>
        </div>

        {/* Freelance */}
        <div className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mar 2021 - Dec 2021</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Developer</h3>
          <h4 className="text-sm text-gray-500 dark:text-gray-400">Zero to Miles • Chennai, India</h4>
          <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 pl-4">
          Created several full-stack web applications, leveraging modern technologies to
deliver end-to-end solutions. Demonstrated strong organizational skills, developed effective problem-solving
methods, and performed in-depth analysis of complex data to drive decision-making and optimize application
performance
          </p>
        </div>
      </div>
    </section>
  );
}