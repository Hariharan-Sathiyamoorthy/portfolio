export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "SmartFaaS",
    year: 2024,
    description: "Reducing Cold Starts in Serverless Computing",
    url: "https://github.com/Hariharan-Sathiyamoorthy/SmartFasS",
  },
  {
    title: "ServerTrace",
    year: 2024,
    description: "Monitoring and Tracing  Infrastructures in Cloud",
    url: "https://github.com/Hariharan-Sathiyamoorthy/servertrace",
  },
  {
    title: "PillPal",
    year: 2024,
    description: "Blockchain-powered medication tracking app",
    url: "https://github.com/Hariharan-Sathiyamoorthy/PillPal",
  },
  {
    title: "JobHunt",
    year: 2024,
    description: "Job Portal with Monitoring and Tracking",
    url: "https://github.com/Hariharan-Sathiyamoorthy/jobhunt",
  },
  {
    title: "DB_queryset_tools",
    year: 2024,
    description: " Python package that provides funtionalities for converting Django QuerySets into different formats",
    url: "https://pypi.org/project/db-queryset-tools-pkg/"
    },
    {
      title:"Taxi Fare Predictior",
      year: 2024,
      description: "Predicting the fare of taxi rides in New York City using Machine Learning",
      url: "https://github.com/Hariharan-Sathiyamoorthy/Taxi_fare_predictor"
    },
    {
      title: "Bluegene Supercomputer logs analysis",
      year: 2024,
      description: "Analyzed the logs of Bluegene Supercomputer to identify the performance bottlenecks using hadoop , spark and mapreduce",
      url: "https://github.com/Hariharan-Sathiyamoorthy/BlueGene_supercomputer_log_analysis"
    }
];
