import React from 'react'
import {featData} from "../data/features-data";
import "./Features.css";
function Features() {
    return (
        <section id="features" className="features">
            <h2 className="features__heading">{featData.heading}</h2>
            <p className="features__sub-title">{featData.subTitle}</p>
            <div className="features__block">
            {featData.features.map(item =>{
                return (
                    <article key={item.id}>
                        <div className="features--icon-block">
                        <item.icon className="icon"/>
                        </div>
                        <p className="features__title">{item.title}</p>
                        <p className="features__detail">{item.detail}</p>
                    </article>
                )
            })}
            </div>
        </section>
    )
}

export default Features
