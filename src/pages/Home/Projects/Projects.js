import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
    const [projectsData, setProjectsData] = useState([])
    useEffect( () => {
        fetch('portfolio.json')
        .then(res => res.json())
        .then(data => setProjectsData(data))
    },[])
    return (
        <div className='bg-[#2a2c39] pb-20'>
            <h3 className='sub-heading text-xl font-normal'>Awesome Portfolio</h3>
            <h1 className='heading'>My Complete Project</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    projectsData.map(project => <ProjectCard 
                    key={project.id}
                    project={project}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;