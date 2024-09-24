import { useEffect } from 'react';
import './skills.scss'

const Skills = () => {
    const addHeading = () => {
        const projectDiv: any = document.querySelector('.skills');
        const existingHeading = document.querySelector('.skillsTitle');
        if (!existingHeading) {
            const heading = document.createElement('h1');
            heading.classList.add('skillsTitle');
            heading.innerText = "SKILLS";
            projectDiv.insertAdjacentElement('beforebegin', heading);
        }
    }
    const removeHeading =  () => {
        const existingHeading = document.querySelector('.skillsTitle');
        if (existingHeading) {
            existingHeading.remove();
        }
    }
    const checkScreenWidth =  () => {
        if (window.innerWidth <= 480) {
            addHeading();
        } else {
            removeHeading();
        }
    }
    useEffect(() => {
        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);
    return (
        <>
            <div className="skills">
                <h2>PROGRAMMING LANGUAGES</h2>
                <div className="skills-row">
                    <div className="skill1">
                        <h2>JavaScript</h2>
                    </div>
                    <div className="skill1">
                        <h2>TypeScript</h2>
                    </div>
                    <div className="skill1">
                        <h2>NodeJS</h2>
                    </div>
                    <div className="skill1">
                        <h2>C#</h2>
                    </div>
                    <div className="skill1">
                        <h2>.NET Core</h2>
                    </div>
                    <div className="skill1">
                        <h2>SQL</h2>
                    </div>
                    <div className="skill1">
                        <h2>HTML</h2>
                    </div>
                    <div className="skill1">
                        <h2>CSS</h2>
                    </div>
                </div>
            </div>
            <div className="skills">
                <h2>FRONTEND</h2>
                <div className="skills-row">
                    <div className="skill1">
                        <h2>ReactJS</h2>
                    </div>
                    <div className="skill1">
                        <h2>Redux</h2>
                    </div>
                    <div className="skill1">
                        <h2>Tailwind CSS</h2>
                    </div>
                    <div className="skill1">
                        <h2>Bootstrap</h2>
                    </div>
                    <div className="skill1">
                        <h2>RTK</h2>
                    </div>
                </div>
            </div>
            <div className="skills">
                <h2>WEB DEVELOPMENT</h2>
                <div className="skills-row-web">
                    <div className="skill1">
                        <h2>ASP.NET Core Web API</h2>
                    </div>
                    <div className="skill1">
                        <h2>ExpressJS</h2>
                    </div>
                    <div className="skill1">
                        <h2>.NET Core MVC</h2>
                    </div>
                </div>
            </div>
            <div className="skills">
                <h2>TESTING</h2>
                <div className="skills-row">
                    <div className="skill1">
                        <h2>TDD</h2>
                    </div>
                    <div className="skill1">
                        <h2>Jest</h2>
                    </div>
                </div>
                <div className="skills">
                    <h2>VERSION CONTROL</h2>
                    <div className="skills-row">
                        <div className="skill1">
                            <h2>Git</h2>
                        </div>
                        <div className="skill1">
                            <h2>GitHub</h2>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <h2>AGILE AND DEVOPS TOOLS</h2>
                    <div className="skills-row">
                        <div className="skill1">
                            <h2>Jira</h2>
                        </div>
                        <div className="skill1">
                            <h2>CI/CD</h2>
                        </div>
                        <div className="skill1">
                            <h2>Docker</h2>
                        </div>
                        <div className="skill1">
                            <h2>Kubernetes</h2>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <h2>CLOUD</h2>
                    <div className="skills-row">
                        <div className="skill1">
                            <h2>GCP</h2>
                        </div>
                        <div className="skill1">
                            <h2>Linux</h2>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <h2>OTHERS</h2>
                    <div className="skills-row-web">
                        <div className="skill1">
                            <h2>RESTful APIs</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills