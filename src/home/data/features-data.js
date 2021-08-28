import {AiOutlineNotification} from "react-icons/ai";
import {AiOutlineCode} from "react-icons/ai";
import {BiCertification} from "react-icons/bi";
import {FiBox} from "react-icons/fi";
import {RiCoupon3Line} from "react-icons/ri";
import {VscSmiley} from "react-icons/vsc";

export const featData = {
    heading: "Our Features",
    subTitle: "Check out our list of awesome features below.",
    features: [
        {
            id: 1,
            title: "Certification",
            detail: "Each of our plan will provide you and your team with certifications.",
            icon: BiCertification,
        },
        {
            id: 2,
            title: "Notifications",
            detail: "Send out notifications to all your customers to keep them engaged.",
            icon: AiOutlineNotification,
        },
        {
            id: 3,
            title: "Bundles",
            detail: "High-quality bundles of awesome tools to help you out.",
            icon: FiBox,
        },
        {
            id: 4,
            title: "Developer Tools",
            detail: "Developer tools to help grow your application and keep it up-to-date.",
            icon: AiOutlineCode,
        },
        {
            id: 5,
            title: "Building Blocks",
            detail: "The right kind of building blocks to take your company to the next level.",
            icon: VscSmiley,
        },
        {
            id: 6,
            title: "Coupons",
            detail: "Coupons system to provide special offers and discounts for your app.",
            icon: RiCoupon3Line,
        }
    ]
}