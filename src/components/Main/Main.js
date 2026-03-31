import "./Main.scss"


export const Main = (Page) => {
    return `
        <main class="Main_Sections">
            ${Page()}
        </main>
    `;
};