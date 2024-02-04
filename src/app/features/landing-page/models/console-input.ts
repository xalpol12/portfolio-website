export interface ConsoleInput {
  command: string,
  switches: string[],
  argument: string
}

export const initCommand: ConsoleInput = {
  command: "java",
  switches: ["-jar"],
  argument: "PersonalWebsiteApplication.jar"
}
