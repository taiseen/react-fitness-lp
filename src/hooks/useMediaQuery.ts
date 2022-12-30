import { useState, useEffect } from "react";


const useMediaQuery = (query: string) => {

    const [matches, setMatches] = useState(false);

    useEffect(() => {

        const media = window.matchMedia(query);

        media.matches !== matches && setMatches(media.matches);

        const listener = () => setMatches(media.matches);

        // add event listener...
        window.addEventListener("resize", listener);

        // remove event listener...
        return () => window.removeEventListener("resize", listener);

    }, [matches, query]);

    return matches;
};


export default useMediaQuery;