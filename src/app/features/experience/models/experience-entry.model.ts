export interface ExperienceEntryModel {
  tabTitle: string,
  fullTitle : string,
  companyName: string,
  companyLink: string,
  startDate: string,
  endDate: string,
  description: string[]
}

export const experience: ExperienceEntryModel[] = [
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
