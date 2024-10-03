export default class HomeNavLink {
  static About: HomeNavLink = new HomeNavLink("about", "About", "/#about")
  static Services: HomeNavLink = new HomeNavLink("services", "Services", "/#services")
  static Portfolio: HomeNavLink = new HomeNavLink("portfolio", "Portfolio", "/#portfolio")
  static Blog: HomeNavLink = new HomeNavLink("blog", "Blog", "/blog")

  constructor(public id: string, public label: string, public href: string) { }
}