import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "TP-GTR",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "3D visuals",
        icon: creator,
    },
    {
        title: "cyber sec",
        icon: creator,
    },
    {
        title: "UI/UX",
        icon: web,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "TP N° 1:",
        company_name: "Starbucks",
        icon: javascript,
        iconBg: "#383E56",
        date: "11/01/2023 at 08:33 am",
        link:'https://tp1-progweb.000webhostapp.com/index.php',
        discription:"calculate a student's grade report"
    },
    {
        title: "TP N° 2:",
        company_name: "Starbucks",
        icon: javascript,
        iconBg: "#383E56",
        date: "12/23/2023 at 05:50 pm",
        link:'https://tp2-progweb.000webhostapp.com/',
        discription:"User Authentication System"
    },
    {
        title: "TP N° 3:",
        company_name: "Starbucks",
        icon: javascript,
        iconBg: "#383E56",
        date: "12/26/2023 at 04:20 pm",
        link:'https://tp3prog.000webhostapp.com/',
        discription:"Order File Management"
    }
];



export { services, technologies, experiences, };