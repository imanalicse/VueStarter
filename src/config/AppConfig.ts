export default class AppConfig {
  static readonly APP_NAME = 'My Vue App'
  static readonly API_BASE_URL = import.meta.env.VITE_API_BASE_URL

  static apiUrl(path: string): string {
    return `${this.API_BASE_URL}${path}`
  }
}
