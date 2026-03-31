import page from "page"
import { Home, Page404, AboutUs} from "../pages"


export const initRouter = (renderApp) => {
    page("/", () => renderApp(Home))
    page("/about", () => renderApp(AboutUs))
    page("*", () => renderApp(Page404))
    page()
}