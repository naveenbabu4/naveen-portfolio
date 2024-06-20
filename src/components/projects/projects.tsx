import React, { useEffect } from 'react'
import './projects.scss'

const Projects = () => {
    const addHeading = () => {
        const projectDiv: any = document.querySelector('.project');
        const existingHeading = document.querySelector('.projectTitle');
        if (!existingHeading) {
            const heading = document.createElement('h1');
            heading.classList.add('projectTitle');
            heading.innerText = "PROJECTS";
            projectDiv.insertAdjacentElement('beforebegin', heading);
        }
    }
    const removeHeading = () => {
        const existingHeading = document.querySelector('.projectTitle');
        if (existingHeading) {
            existingHeading.remove();
        }
    }
    const checkScreenWidth = () => {
        if (window.innerWidth <= 1400) {
            addHeading();
        } else {
            removeHeading();
        }
    }
    const headingSticky = () => {
        const heading: any = document.querySelector('.projectTitle');
        
        const scrollTop = window.scrollY;
        if (scrollTop >= 378) {
            heading.classList.add('sticky');
        } else {
            heading.classList.remove('sticky');
        };
    }
    useEffect(() => {
        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);
        window.addEventListener('scroll', headingSticky);
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
            window.removeEventListener('scroll',headingSticky);
        };
    }, []);

    const redirectToPage = (url: string) => {
        window.open(url, '_blank')
    }
    return (
        <div className='projects'>
            <div className="project">
                <div className="project-info" onClick={() => redirectToPage("https://github.com/Kran891/Travel-Agency-API.git")}>
                    <h4>TYPESCRIPT, YAML ROUTING</h4>
                    <h2>Travel Agency API</h2>
                    <p>Create, Delete and Update booking and information</p>
                </div>
            </div>
            <div className="project">
                <div className="project-info" onClick={() => redirectToPage("https://github.com/Kran891/Travel-Agency-API.git")}>
                    <h4>TYPESCRIPT, YAML ROUTING</h4>
                    <h2>Travel Agency API</h2>
                    <p>Create, Delete and Update booking and information</p>
                </div>
            </div>
            <div className="project">
                <div className="project-info" onClick={() => redirectToPage("https://github.com/Kran891/Movie-API.git")}>
                    <h4>NODEJS, TYPESCRIPT</h4>
                    <h2>MovieBuzz API</h2>
                    <p>Create, Delete and Update movies and series </p>
                </div>
            </div>
            <div className="project">
                <div className="project-info" onClick={() => redirectToPage("https://github.com/Kran891/movie-react.git")}>
                    <h4>REACT, TYPESCRIPT</h4>
                    <h2>MovieBuzz APP</h2>
                    <p>Displays movies and series information. Performs add, update and delete through frontend. </p>
                </div>
            </div>
            <div className="project">
                <div className="project-info" onClick={() => redirectToPage("https://github.com/naveenbabu4/PayrollAPIFinal.git")}>
                    <h4>.NET CORE</h4>
                    <h2>Payroll Management API</h2>
                    <p>Create, Delete, Update and some required functions of payroll generations </p>
                </div>
            </div>
            <div className="project">
                <div className="project-info" onClick={() => redirectToPage("https://github.com/naveenbabu4/PayRollWebApp.git")}>
                    <h4>ANGULAR, TYPESCRIPT</h4>
                    <h2>Payroll Management APP</h2>
                    <p>Create, Delete, Update and some required functions of payroll generations in frontend </p>
                </div>
            </div>
        </div>
    )
}

export default Projects