export interface ExperienceEntryModel {
  tabTitle: string,
  fullTitle : string,
  companyName: string,
  companyLink: string,
  startDate: string,
  endDate?: string,
  description: string[]
}

export const experience: ExperienceEntryModel[] = [
  {
    tabTitle: "Consdata",
    fullTitle: "Fullstack Engineer",
    companyName: "Consdata",
    companyLink: "https://consdata.com/en/",
    startDate: "Jul 2024",
    description: [
      `
      Contributed to the development and maintenance of corporate banking system for one of Poland's
      largest banks using Spring, Angular, MyBatis, and IBM DB2. Worked as part of the core team
      responsible for the most critical components, developing and enhancing features across backend
      and frontend while ensuring stability and performance of key functionalities.
      `,
      `
      Collaborated with analysts, testers, project owners, and other developers to gather requirements
      and deliver high-quality solutions. Actively participated in Agile ceremonies aligning with SCRUM
      practices to ensure efficient project delivery. Engaged in direct client communication to clarify
      requirements, provide updates, and address technical inquiries.
      `
    ]
  },
  {
    tabTitle: "GlobalLogic",
    fullTitle: "Java Backend Engineering Intern",
    companyName: "GlobalLogic",
    companyLink: "https://www.globallogic.com/emea-talent/about-us/",
    startDate: "Jul 2023",
    endDate: "Sep 2023",
    description: [
      `
      Worked on development of micro-service architecture project that was intended for use in
      automotive sector. Expanded my expertise with REST API, PostgreSQL database, Spring Cloud
      and other libraries used in commercial projects, such as Liquibase, Hazelcast and Swagger.
      `,
      `
      Actively engaged in collaborative efforts within the team, conducting code reviews and
      assisting other teammates. Regularly participated in weekly progress presentations to the
      client and the mentors, where I was introduce to the Scrum methodology.
      `
    ]
  },
]
