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
    title: "Kuka AR",
    techStack: ["C#", "Unity", "Java + Spring"],
    frontDescription: `IoT system for real-time tracking of industrial robot's coordinate system
    using augmented reality. Android app and back-end server created for engineering thesis.`,
    backDescription: `This is a back description that I haven't provided yet.
    Here will be some other details in case front description is too long.`,
    ghLink: "https://github.com/xalpol12/kuka-ar",
    ytLink: "https://youtu.be/biTEiVqRQYo",
  },
  {
    title: "Messenger Bot",
    techStack: ["Java + Spring", "Angular", "Docker"],
    frontDescription: "Soon to be completed.",
    backDescription: `This is a back description that I haven't provided yet.
    Here will be some other details in case front description is too long.`,
    ghLink: "https://github.com/xalpol12/messenger-bot",
    ytLink: "https://www.youtube.com/watch?v=qU8UfYdKHvs",
    outsideLink: "https://www.google.pl/",
  },
  {
    title: "Where to Eat",
    techStack: ["Java + Spring", "Android app"],
    frontDescription: `Android app that recommends user a list of restaurants in specified proximity,
    based on phone's GPS sensor and Google Places API.`,
    backDescription: `This is a back description that I haven't provided yet.
    Here will be some other details in case front description is too long.`,
    ghLink: "https://github.com/xalpol12/where-to-eat-android-app",
  },
]
