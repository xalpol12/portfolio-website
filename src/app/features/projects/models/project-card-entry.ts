export interface ProjectCardEntry {
  title: string,
  techStack: string[],
  frontDescription: string,
  backDescription?: string,
  ghLink?: string,
  outsideLink?: string,
  ytLink?: string,
}

export const projects: ProjectCardEntry[] = [
  {
    title: "Kuka AR (Backend)",
    techStack: ["C#", "Unity", "Java + Spring"],
    frontDescription: `IoT system for real-time tracking of industrial robot's coordinate system
    using augmented reality. Android app and back-end server created for engineering thesis.`,
    backDescription: `This is a back description that I haven't provided yet.
    Here will be some other details in case front description is too long.`,
    ghLink: "https://github.com/xalpol12/kuka-ar",
    ytLink: "https://youtu.be/biTEiVqRQYo",
  },
  {
    title: "Messenger Bot (Fullstack)",
    techStack: ["Java + Spring", "Typescript + Angular", "Docker"],
    frontDescription: "Soon to be completed.",
    backDescription: `This is a back description that I haven't provided yet.
    Here will be some other details in case front description is too long.`,
    ghLink: "https://github.com/xalpol12/messenger-bot",
    ytLink: "https://www.youtube.com/watch?v=qU8UfYdKHvs",
    outsideLink: "https://www.google.pl/",
  },
  {
    title: "Where to Eat (Fullstack)",
    techStack: ["Java + Spring", "Android app"],
    frontDescription: `Android app that recommends user a list of restaurants in specified proximity,
    based on phone's GPS sensor and Google Places API.`,
    backDescription: `This is a back description that I haven't provided yet.
    Here will be some other details in case front description is too long.`,
    ghLink: "https://github.com/xalpol12/where-to-eat-android-app",
  },
  {
    title: "Portfolio Page (Frontend)",
    techStack: ["Typescript + Angular"],
    frontDescription: `Portfolio SPA that aims to present information and list
    the best projects in a coherent way. Leveraging bootstrap library and cattpuccin color scheme with retro
    terminal aesthetic to visualize my areas of interest.`,
    backDescription: `This is a back description that I haven't provided yet.
    Here will be some other details in case front description is too long.`,
    ghLink: "https://github.com/xalpol12/portfolio-website",
  },
  {
    title: "Kinect Robot Controller",
    techStack: ["Python", "ROS2", "Linux"],
    frontDescription: `ROS2 package for controlling a robot using gestures.
    Implemented with image processing algorithms using OpenCV and Kinect v1 depth sensor`,
    backDescription: `This is a back description that I haven't provided yet.
    Here will be some other details in case front description is too long.`,
    ghLink: "https://github.com/xalpol12/kinect-robot-controller",
    ytLink: "https://www.youtube.com/watch?v=vXd0x3p9swo"
  },
  {
    title: "JSON to XML Adapter",
    techStack: ["Java"],
    frontDescription: `CLI application for converting specific JSON files to
    established XML hierarchy. Project involved creating a POJO representation
    of XML file structure, document deserialization, DOM manipulation and serialization.`,
    backDescription: `This is a back description that I haven't provided yet.
    Here will be some other details in case front description is too long.`,
    ghLink: "https://github.com/xalpol12/festo-xml-json-adapter",
  },
  {
    title: "Candy Recognizer",
    techStack: ["Python"],
    frontDescription: `App that recognizes and returns a count of m&m's candies
    of each color in a provided photo. Implemented with image processing
    algorithms using OpenCV library.`,
    backDescription: `This is a back description that I haven't provided yet.
    Here will be some other details in case front description is too long.`,
    ghLink: "https://github.com/xalpol12/candy-recognizer",
  },
]
