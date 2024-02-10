import { Component } from '@angular/core';
import {ExperienceEntryModel} from "../../models/experience-entry.model";

@Component({
  selector: 'app-vertical-multitab',
  templateUrl: './vertical-multitab.component.html',
  styleUrl: './vertical-multitab.component.scss'
})
export class VerticalMultitabComponent {
  experienceEntries: ExperienceEntryModel[] = experience;
  activeTab: number = 0;
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
  {
    tabTitle: "Placeholder #1",
    fullTitle: "Java Backend Engineering Intern",
    companyName: "WSRH",
    companyLink: "https://pl.wikipedia.org/wiki/WSRH",
    startDate: "Sep 2023",
    endDate: "Dec 2023",
    description: [
      `
      WSRH (skrót od Wyższa Szkoła Robienia Hałasu) – polski zespół muzyczny wykonujący hip-hop.
      Powstał w 2008 roku z inicjatywy poznańskich raperów Shelleriniego i Słonia.
      `,
      `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius maximus justo et luctus.
      Nulla eget nunc euismod, posuere dolor tempus, gravida justo. Integer at commodo elit.
      Nunc id tempus metus, vel fringilla ligula. Vestibulum porta erat ut justo maximus tempor.
      Integer efficitur tempus enim. Proin pretium leo nec elit tempus, nec consectetur risus semper.
      Phasellus in ligula in lacus ultricies semper. Curabitur ipsum nisi, euismod ac convallis a, tincidunt id urna.
      Suspendisse potenti. Etiam quis aliquam tellus, in faucibus justo. Vivamus vitae ex id elit tempus fermentum.
      Duis quis gravida enim.
      `
    ]
  },
]
