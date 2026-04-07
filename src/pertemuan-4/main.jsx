import { createRoot } from "react-dom/client";
import FrameworkList from "./frameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveText from "./ResponsiveTest";
import "./tailwind.css";


createRoot(document.getElementById("root"))
    .render(

        <div>
             {/* <FrameworkListSearchFilter/> */}
             <ResponsiveText/>
        </div>
        
    )
    