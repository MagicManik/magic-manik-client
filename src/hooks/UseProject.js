import { useEffect, useState } from "react";

const UseProject = id => {
    console.log('project id is', id)
    const [project, setProject] = useState({});

    useEffect(() => {
        fetch(`https://aqueous-spire-35351.herokuapp.com/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id, project]);

    return [project, setProject]
}

export default UseProject;