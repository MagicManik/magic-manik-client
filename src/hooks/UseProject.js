import { useEffect, useState } from "react";

const UseProject = id => {
    console.log('project id is', id)
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id, project]);

    return [project, setProject]
}

export default UseProject;