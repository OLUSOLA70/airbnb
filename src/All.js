import React from "react";
import Navbar from "./Navbar";
import Sec from "./Sec";
import "./index.css";  
import Card from "./Card";

export default function All() {
    return(
        <div>
            <Navbar />
            <Sec />
                <Card 
                    badge="SOLD OUT"
                    image="swim"
                    rating="★ 5.0"
                    title="Life lessons with Katie Zaferes"
                    price="From $136"
                />   
</div>
    )
}
