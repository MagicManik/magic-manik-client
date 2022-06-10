import React from 'react';
import { useParams } from 'react-router-dom';
import UseProject from '../../hooks/UseProject';

const ProjectDetails = () => {
    const { id } = useParams();

    const [project] = UseProject(id);

    return (
        <section>
            <div>

            </div>
        </section>
    );
};

export default ProjectDetails;