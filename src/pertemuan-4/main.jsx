import { createRoot } from "react-dom/client";
import FrameworkList from "./frameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import "./tailwind.css";


createRoot(document.getElementById("root"))
    .render(

        <div>
             <FrameworkListSearchFilter/>
             
        </div>
        
    )
    