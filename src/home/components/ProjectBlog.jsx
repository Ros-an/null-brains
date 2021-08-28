import React from 'react';
import {blogCardDetail} from "../data/project-blog-data";
import {blogCardDetailOne} from "../data/project-blog-data";
import "./ProjectBlog.css";
function ProjectBlog() {
    return (
        <section className="project-blog">
            <h1>The Project Blog</h1>
            <h3>Designs and layouts to help you with your app.</h3>
            <div className="project-blog__card">
                {blogCardDetail.map(card => {
                    return (
                        <article key={card.id} className={`${card.id%2 ? "standard" : "large" }  ${card.color}`}>
                            <img src={card.imgSrc} alt={card.tag}/>
                            <div className="card__detail">
                                <small className={card.color}>{card.tag}</small>
                                <h2 className="card__title">{card.title}</h2>
                                <p className="card__intro">{card.detail}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
            <div className="project-blog__card-medium">
            {blogCardDetailOne.map(card => {
                    return (
                        <article key={card.id} >
                            <img src={card.imgSrc} alt={card.tag}/>
                            <div className="card__detail">
                                <small className={card.color}>{card.tag}</small>
                                <h2 className="card__title">{card.title}</h2>
                                <p className="card__intro">{card.detail}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectBlog
