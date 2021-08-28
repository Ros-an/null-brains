import React from 'react'
import {teamData} from "../data/team-data";
import {AiOutlineTwitter} from "react-icons/ai";
import {FaGithub} from "react-icons/fa";
import "./Team.css";
function Team() {
    return (
        <section className="team">
            <h3>{teamData.heading}</h3>
            <h1>{teamData.title}</h1>

            <div className="team__members">
            {teamData.members.map(member => {
                return (
                    <article key={member.id}>
                        <div className={`team__members__image ${member.id%2?"blue-light": "green-light"}`}>
                            <img src={member.imageSrc} alt={member.name} />
                        </div>
                        <p className="team__members__name">{member.name}</p>
                        <p className="team__members__position">{member.position}</p>
                        <div className="team__members__social-link">
                            <AiOutlineTwitter className="icon"/>
                            <FaGithub className="icon"/>
                        </div>
                    </article>
                )
            })}
            </div>
        </section>
    )
}

export default Team
