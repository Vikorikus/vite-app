import "./styles.scss";
import Button from "./components/Button/index.js";
import iconViteSrc from "@/icons/iconVite.svg";

document.querySelector("#app").innerHTML = `

<section>
${Button()}
${Button()}
${Button()}
<img src="${iconViteSrc}"/>
</section>
`;
