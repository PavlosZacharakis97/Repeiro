import img404 from "/image/404img.png";

export const Page404 = () => {
  return /*html*/ `
    <div class="Page404">
        <div class="Page404_container">
            <img src="${img404}" alt="404 Dragon" class="img404">
            <div class="Page404_content">
                <h1 class="Page404_text">Whoops...<br>this page<br>is not<br>available</h1>
                <a href="/" class="Page404_back">На главную</a>
            </div>
        </div>
    </div>
    `;
};