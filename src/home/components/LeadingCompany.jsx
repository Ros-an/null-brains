import React from 'react'
import Disney from "../../assets/logos/Disney+-Logo.wine.svg";
import Google from "../../assets/logos/Google-Logo.wine.svg";
import HubSpot from "../../assets/logos/HubSpot-Logo.wine.svg";
import Shopify from "../../assets/logos/Shopify-Logo.wine.svg";
import Slack from "../../assets/logos/Slack_Technologies-Logo.wine.svg";
import Youtube from "../../assets/logos/YouTube-Logo.wine.svg";
import "./LeadingCompany.css";

function LeadingCompany() {
    return (
        <section className="leading-company">
            <h3>TRUSTED BY TOP-LEADING COMPANIES.</h3>
            <article>
                {companyName.map(item => {
                    return (
                        <div className="leading-company__logo" key={item.id}>
                            <img src={item.svgImage} alt={item.id}/>
                        </div>
                    )
                })}
            </article>
        </section>
    )
}

export default LeadingCompany


const companyName = [
    {
        id: 1,
        svgImage: Disney,
    },
    {
        id: 2,
        svgImage: Google,
    },
    {
        id: 3,
        svgImage: HubSpot,
    },
    {
        id: 6,
        svgImage: Youtube,
    },
    {
        id: 5,
        svgImage: Slack,
    },
    {
        id: 4,
        svgImage: Shopify,
    },
]