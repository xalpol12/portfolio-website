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
    using augmented reality. `,
    backDescription: `Spring Web server containing REST module for managing static data, websocket
    module for real-time data acquisition and transmission. Client Android app uses AR Foundation framework
    for image recognition and data visualization in a 3D scene.`,
    ghLink: "https://github.com/xalpol12/kuka-ar",
    ytLink: "https://youtu.be/biTEiVqRQYo",
  },
  {
    title: "Messenger Bot (Fullstack)",
    techStack: ["Java + Spring", "Typescript + Angular", "Docker"],
    frontDescription: "[Work in progress] Service for scheduling and sending messages using Messenger API.",
    backDescription: `Completion level: 80% - implementing frontend.
    Backend service that periodically checks database for messages scheduled by a fanpage admin.`,
    ghLink: "https://github.com/xalpol12/messenger-bot",
  },
  {
    title: "Where to Eat (Fullstack)",
    techStack: ["Java + Spring", "Android app"],
    frontDescription: `Android app that recommends user a list of restaurants in specified proximity, based on their location.`,
    backDescription: `Spring backend server acting as a wrapper for Google Places API.
    DI library (Hilt + Dagger) with Room database for an Android app. Mobile app uses measurements
    from phone's GPS sensor.`,
    ghLink: "https://github.com/xalpol12/where-to-eat-android-app",
  },
  {
    title: "Portfolio Website (Frontend)",
    techStack: ["Typescript + Angular"],
    frontDescription: `SPA that aims to present information and list
    my best personal projects in a coherent way. `,
    backDescription: `Leveraging ng-bootstrap library and catppuccin color scheme with retro
    terminal aesthetic to visualize my areas of interest. Modular project structure that promotes
    expandability.`,
    ghLink: "https://github.com/xalpol12/portfolio-website",
  },
  {
    title: "Kinect Robot Controller",
    techStack: ["Python", "ROS2", "Linux"],
    frontDescription: `ROS2 package for controlling a robot using gestures.`,
    backDescription: `Implemented with image processing algorithms using OpenCV and Kinect v1 depth sensor.`,
    ghLink: "https://github.com/xalpol12/kinect-robot-controller",
    ytLink: "https://www.youtube.com/watch?v=vXd0x3p9swo"
  },
  {
    title: "JSON to XML Adapter",
    techStack: ["Java"],
    frontDescription: `CLI application for converting specific JSON files to
    established XML hierarchy. `,
    backDescription: `Project involved creating a POJO representation of XML
    file structure, document deserialization, DOM manipulation and serialization.`,
    ghLink: "https://github.com/xalpol12/festo-xml-json-adapter",
  },
  {
    title: "Candy Recognizer",
    techStack: ["Python"],
    frontDescription: `App that recognizes and returns a count of m&m's candies
    of each color in a provided photo. `,
    backDescription: `Implemented with image processing
    algorithms using OpenCV library.`,
    ghLink: "https://github.com/xalpol12/candy-recognizer",
  },
]
