import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

    const handleClick = () => {
        const lastVisit = localStorage.getItem("lastVisit");

        if (lastVisit) {
            try {
                const { owner, repo } = JSON.parse(lastVisit);

                if (owner && repo) {
                    navigate(`/${owner}/${repo}`);
                    return;
                }
            } catch (error) {
                console.error("Errore nel parsing di lastvisit", error);
            }
        }

        navigate(-1);
    };

    return (
        <>
            <div 
                onClick={handleClick} 
                className="fixed top-8 left-8 max-md:left-6 inline-flex justify-center items-center p-4 max-md:p-2 bg-neutral-800 hover:bg-neutral-700 cursor-pointer rounded-full w-fit transition-all"
            >
                <svg 
                    fill="#fff" 
                    className="rotate-180" 
                    height="24" 
                    width="24" 
                    version="1.1" 
                    id="Layer_1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    xmlnsXlink="http://www.w3.org/1999/xlink" 
                    viewBox="-92.4 -92.4 514.80 514.80" 
                    xmlSpace="preserve" 
                    stroke="#fff" 
                    strokeWidth="23.1"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="66"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> 
                    </g>
                </svg>
            </div>
            <div className="max-md:mt-16">
                <h1 className="text-5xl font-medium mb-4">About</h1>
                <p className="text-neutral-400">
                    Portify is a simple yet powerful portfolio generator designed to make creating and showcasing your personal portfolio effortless. With Portify, you can configure a fully customizable portfolio website by defining your content in a single JSON file. Whether you're a developer, designer, or creative professional, Portify helps you establish an online presence with minimal setup.

                    <br />
                    <br />

                    Get started today and take the first step toward creating your online portfolio with Portify!
                </p>
            </div>
        </>
    );
}
