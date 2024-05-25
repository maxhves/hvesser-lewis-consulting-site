export abstract class Project {
  static title: string
  static description: string
  static link: string
  static technologyTags: string[]
}

export class PrimaryProject extends Project {
  static imageSource: string
}

export class SecondaryProject extends Project {}