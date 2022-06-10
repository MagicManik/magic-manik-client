import { useEffect, useState } from "react"

const UseProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-spire-35351.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return [projects];
}

export default UseProjects;