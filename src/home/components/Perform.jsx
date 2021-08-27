import React from 'react';
import CustomIcon from "../../assets/CustomIcon";
import astronaut from "../../assets/taxi-welcome-to-space-1.png";
import robot from "../../assets/taxi-robot.png";
import "./Perform.css";
function Perform() {
    return (
        <section className="perform">
            {info.map(item => {
                const flow = item.id%2 ? "left-to-right": "right-to-left";
                return (
                    <article key={item.id}>
                        {
                            flow === "left-to-right" && 
                            <>
                            <div className="perform__image">
                           <img src={item.svgImage} alt={item.title} />
                        </div>
                        <div className="perform__detail">
                            <h2>{item.title}</h2>
                            <p>{item.detail}</p>
                            <ul>
                                {item.bulletPoint.map(pt => {
                                    return (
                                        <li key={pt.id}>
                                            <CustomIcon />
                                            <p>{pt.point}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                            </>
                        }
                            {
                            flow === "right-to-left" && 
                            <>
                        <div className="perform__detail">
                            <h2>{item.title}</h2>
                            <p>{item.detail}</p>
                            <ul>
                                {item.bulletPoint.map(pt => {
                                    return (
                                        <li key={pt.id}>
                                            <CustomIcon />
                                            <p>{pt.point}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                            <div className="perform__image">
                           <img src={item.svgImage} alt={item.title} />
                        </div>
                            </>
                        }
                    </article>
                )
            })}
        </section>
    )
}

export default Perform

const info = [
    {
        id: 1,
        svgImage: astronaut,
        title: "Boost Productivity",
        detail: "Build an atmosphere that creates productivity in your organization and your company culture",
        bulletPoint: [
            {
            id: 1,
            point: "Maximize productivity and growth"
        },
        {
            id: 2,
            point: "Speed past your competition"
        },
        {
            id: 3,
            point: "Learn the top techniques"
        }
    ]
    },
    {
        id: 2,
        svgImage: robot,
        title: "Automated Tasks",
        detail: "Save time and money with our revolutionary services. We are the leaders in the industry.",
        bulletPoint: [
            {
            id: 1,
            point: "Automated task management workflow"
        },
        {
            id: 2,
            point: "Detailed analytics for your data"
        },
        {
            id: 3,
            point: "Some awesome integrations"
        }
    ]
    }
]