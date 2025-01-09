import React, { useEffect, useState } from 'react';

import CardComponent from '@/components/CardComponent';
import { Button } from '@/components/ui/button';
import { Link, Outlet } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';

const Dashboard = () => {

    const { isSignedIn, user, isLoaded } = useUser();

    if (isSignedIn) {
        // console.log(user.emailAddresses[0].emailAddress)
        // console.log(user.id);
        // console.log(user.fullName);

        console.log(`${import.meta.env.VITE_SERVER_URL}/api/user/`)
        const data = {
            userId: user.id,
            userEmail: user.emailAddresses[0].emailAddress,
            userName: user.fullName
        }
        console.log(data)
        try {
            const response = axios.post(`${import.meta.env.VITE_SERVER_URL}/api/user`, data)
            console.log(response)
        } catch (error) {
            console.log("Error:", error)
        }
    }
    const [topicsShow, setTopicsShow] = useState(false);


    const topics = [
        {
            title: "Custom Topic",
            description: "Upload Job Description and practice an in depth interview in that topic",
            nav: "custom"
        },
        {
            title: "Front-End Developer",
            description: "We are seeking a skilled Front-End Developer who is proficient in modern web technologies and frameworks. The ideal candidate will have a strong eye for design, a solid understanding of user experience principles, and the ability to translate UI/UX designs into code. You will work closely with our design and back-end teams to create responsive, intuitive, and visually appealing web applications.",
            tags: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue.js"],
            nav: "frontend"
        },
        {
            title: "Back-End Developer",
            description: "We are looking for a proficient Back-End Developer who excels in server-side logic, database management, and API integration. The ideal candidate should have experience with various back-end technologies and frameworks, ensuring secure, scalable, and high-performance web applications.",
            tags: ["Node.js", "Python", "Java", "Ruby", "SQL", "NoSQL", "Django", "Spring"],
            nav: "backend"
        },
        {
            title: "Full-Stack Developer",
            description: "We are in search of a versatile Full-Stack Developer who is adept at both front-end and back-end development. The ideal candidate will have a comprehensive understanding of the entire web application stack and the ability to manage servers, databases, and user interfaces.",
            tags: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Angular", "SQL"],
            nav: "fullstack"
        },
        {
            title: "DevOps Engineer",
            description: "We are looking for a DevOps Engineer to manage our development operations and ensure the efficient deployment of software. The ideal candidate will have experience with CI/CD pipelines, automation, infrastructure management, and system monitoring to maintain high system reliability and scalability.",
            tags: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Terraform", "Ansible", "Linux"],
            nav: "devops"
        },
        {
            title: "Software Tester",
            description: "We are seeking a meticulous Software Tester to ensure the quality and functionality of our software. The ideal candidate will be skilled in both manual and automated testing methods, capable of identifying and documenting bugs, and ensuring that software meets the required standards.",
            tags: ["Manual Testing", "Automated Testing", "Selenium", "JIRA"],
            nav: "soft-test"
        },
        {
            title: "Project Manager",
            description: "We are looking for an experienced Project Manager to oversee our project lifecycles from planning to completion. The ideal candidate will be adept at coordinating teams, managing timelines, resources, and budgets, and ensuring that project goals are achieved successfully.",
            tags: ["Project Management", "Agile", "Scrum"],
            nav: "proj-man"
        },
        {
            title: "UI/UX Designer",
            description: "We are searching for a creative UI/UX Designer who can design intuitive and engaging user interfaces and experiences. The ideal candidate will conduct user research, create wireframes and prototypes, and work closely with developers to bring designs to life.",
            tags: ["UI Design", "UX Design", "Adobe XD", "Sketch", "Figma"],
            nav: "ui-ux"
        },
        {
            title: "Product Manager",
            description: "We are seeking a strategic Product Manager to define the vision and roadmap for our products. The ideal candidate will manage the product lifecycle, conduct market research, and work with cross-functional teams to ensure the product meets market needs and business goals.",
            tags: ["Product Management", "Market Research", "Roadmapping"],
            nav: "prod-man"
        },
        {
            title: "Marketing Specialist",
            description: "We are looking for a dynamic Marketing Specialist to develop and execute marketing campaigns that promote our products or services. The ideal candidate will analyze market trends, manage social media, create content, and measure the effectiveness of marketing efforts.",
            tags: ["Marketing", "SEO", "Content Creation", "Analytics", "Digital Marketing"],
            nav: "mark-spe"
        }
    ];


    const displayTopics = topics.slice(0, 7);

    return (
        <>
            <Navbar />
            <div className='grid grid-cols-4 gap-5 mx-12 my-8'>
                {!topicsShow ? (
                    displayTopics.map((topic, index) => {
                        const showD = topic.description.slice(0, 100);
                        return (
                            <Link key={index} to={topic.nav} state={{ title: topic.title, description: topic.description, tags: topic.tags }}>
                                <CardComponent key={index} title={topic.title} description={showD + "..."} tags={topic.tags} />
                            </Link>
                        )
                    }
                    )) : (
                    topics.map((topic, index) => {
                        const showD = topic.description.slice(0, 100);
                        return <Link key={index} to={topic.nav} state={{ title: topic.title, description: topic.description, tags: topic.tags }}>
                            <CardComponent key={index} title={topic.title} description={showD + "..."} tags={topic.tags} />
                        </Link>
                    })
                )}
                <div className='flex items-center justify-center w-full'><Button variant="outline" onClick={() => setTopicsShow((prev) => !prev)}>
                    {topicsShow ? "Show Less" : "Show More"}
                </Button></div>


            </div>
            <Outlet />
        </>
    );
};

export default Dashboard;
