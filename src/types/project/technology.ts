export class Technology {
  static readonly ANDROID = new Technology('android', 'emerald')
  static readonly IOS = new Technology('ios', 'zinc')
  static readonly KOTLIN = new Technology('kotlin', 'purple')
  static readonly SWIFT = new Technology('swift', 'orange')
  static readonly TYPESCRIPT = new Technology('typescript', 'blue')
  static readonly REACTJS = new Technology('reactjs', 'cyan')
  static readonly NEXTJS = new Technology('nextjs', 'zinc')
  static readonly TAILWINDCSS = new Technology('tailwindcss', 'sky')
  static readonly SUPABASE = new Technology('supabase', 'green')

  private constructor(private readonly label: string, public readonly color: string) {}

  toString() {
    return this.label
  }
}