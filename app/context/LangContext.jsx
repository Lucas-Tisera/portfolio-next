'use client'
import { createContext, useState } from "react";

const LangContext = createContext();
const translations = {
    en: {
        home: "Home",
        experience: "Experience",
        experienceBDT: "As a Full Stack Developer, I was able to perform my role alongside my teammates to carry out different types of projects, working on both mobile and web applications, contributing the necessary input to ensure smooth progress, while adhering to guidelines and delivery deadlines. This experience has been highly valuable in expanding my knowledge and honing my hard skills, as it involves working with various technologies such as React, React Native, Node, Php, Laravel, and JavaScript, constantly learning something new from them. It has also allowed me to develop soft skills through effective communication within the team and a constant willingness to help, thereby strengthening teamwork, communication, and collaborative problem-solving skills.",
        experiencePersonal1:"As a self-taught developer, I kept learning new languages and skills that could help me face projects where I applied the acquired knowledge and best practices. Currently, after a long training process, I am carrying out a project that has always motivated me, my own portfolio, which are you watching right now.",
        experiencePersonal2:"During the course I managed to create good code habits and practices applicable to any type of work as a developer.",
        experiencePersonal3:"The principal tech stack that i used was: ",
        experienceInternTitle: "Full Stack Developer (internships)",
        experienceTitle: "Full Stack Developer",
        experienceIntern1: "During the internships, I was part of a development team where we were able to carry out several project proposals, allowing us to learn and demonstrate the previously acquired knowledge.",
        experienceIntern2: "Primarily, the tasks were carried out in React.js, and the use of Node.js was implemented.",
        experienceCoder: "In my role as a teacher, my main goal is to convey my knowledge and help students understand the fundamentals of React.js. I enjoy sharing my hands-on experience in web application development using this powerful tool. My approach is to provide a balanced mix of theory and practice, enabling students to gain a solid understanding while applying their knowledge in practical projects.",
        experienceCoder2: "I firmly believe in the importance of adapting to different learning styles and, therefore, I adopt a flexible and patient approach in my teaching. I strive to provide clear and concise explanations, using relevant, real-world examples to illustrate React.js concepts. Additionally, I am always available to answer questions and resolve doubts, providing individualized support to ensure my students’ success.",
        skillsTitle: "Tech Skills",
        skillsHtml: "High technical skill using it for 3 - 4 years at work and high school",
        skillsCss: "High technical skill using it for 3 - 4 years at work, high school, personal projects and web challenges",
        skillsJs: "High skill level using it for 3 - 4 years at work and personal projects",
        skillsPhp: "Medium skill level using it for 2 years at work and high school",
        skillsReact: "Advanced skills using it for 2 - 3 years at work, high school and personal projects",
        skillsLaravel:"Basic skill level using it for 1 year at work",
        skillsReactNative: "Medium skills using it for 1 - 2 years at work, and personal projects",
        skillsNode: "Medium technical skill using it for 1 year combining it with React at work and high school",
        skillsNext: "Moderated technical skill using it for 1 year in personal projects",
        education: "Education",
        skills: "Skills",
        contact: "Contact",
        title: "Hi, I'm Lucas Tisera",
        subtitle: "Full Stack Developer",
        description: "Hello, and welcome to my portfolio! My name is Lucas Tisera, and I am excited to share with you my skills, experiences, and accomplishments. I am a Full-Stack Developer with a passion for software development. Through this portfolio, I aim to provide you with a comprehensive understanding of who I am, the work I have done, and the value I can bring to your project or organization.",
        btn: "Let's Talk",
        btn2: "Download CV",
        contactTitle: "Contact Me",
        formNombre: "Name",
        formEmail: "Email",
        formCel: "Phone",
        formMensaje: "Message",
        formSubmit: "Send",
        emailSend: "Email sent successfully",
        load: "Sending...",
    },
    es: {
        home: "Inicio",
        experience: "Experiencia",
        experienceBDT: "Como desarrollador Full Stack, pude desempeñar mi rol junto a mis compañeros de equipo para llevar a cabo diferentes tipos de proyectos, trabajando tanto en aplicaciones móviles como web, aportando el insumo necesario para garantizar un progreso fluido, respetando las pautas y plazos de entrega. Esta experiencia ha sido altamente valiosa para ampliar mis conocimientos y perfeccionar mis habilidades técnicas, ya que implica trabajar con diversas tecnologías como React, React Native, Node, Php, Laravel y JavaScript, aprendiendo constantemente algo nuevo de ellas. También me ha permitido desarrollar habilidades blandas a través de una comunicación efectiva dentro del equipo y una constante disposición a ayudar, fortaleciendo así el trabajo en equipo, la comunicación y las habilidades de resolución de problemas colaborativas.",
        experiencePersonal1: "Como desarrollador autodidacta, seguí aprendiendo nuevos lenguajes y habilidades que pudieran ayudarme a enfrentar proyectos donde aplicara los conocimientos adquiridos y las mejores prácticas. Actualmente, después de un largo proceso de capacitación, estoy llevando a cabo un proyecto que siempre me ha motivado, mi propio portafolio, que estás viendo en este momento.",
        experiencePersonal2: "Durante el curso logré crear buenos hábitos y prácticas de código aplicables a cualquier tipo de trabajo como desarrollador.",
        experiencePersonal3: "El principal stack tecnológico que utilicé fue: ",
        experienceInternTitle: "Desarrollador Full Stack (prácticas)",
        experienceTitle: "Desarrollador Full Stack",
        experienceIntern1: "Durante las prácticas, formé parte de un equipo de desarrollo donde pudimos llevar a cabo varias propuestas de proyectos, lo que nos permitió aprender y demostrar los conocimientos adquiridos previamente.",
        experienceIntern2: "Principalmente, las tareas se realizaron en React.js, y se implementó el uso de Node.js.",
        experienceCoder:"En mi papel como profesor, mi objetivo principal es transmitir mis conocimientos y ayudar a los estudiantes a comprender los fundamentos de React.js. Disfruto compartiendo mi experiencia práctica en el desarrollo de aplicaciones web utilizando esta poderosa herramienta. Mi enfoque es brindar una combinación equilibrada de teoría y práctica, lo que permite a los estudiantes adquirir una comprensión sólida mientras aplican sus conocimientos en proyectos prácticos.",
        experienceCoder2:"Creo firmemente en la importancia de adaptarse a diferentes estilos de aprendizaje y, por lo tanto, adopto un enfoque flexible y paciente en mi enseñanza. Me esfuerzo por proporcionar explicaciones claras y concisas, utilizando ejemplos relevantes y reales para ilustrar los conceptos de React.js. Además, estoy siempre disponible para responder preguntas y resolver dudas, brindando apoyo individualizado para garantizar el éxito de mis estudiantes.",
        skillsTitle: "Habilidades Técnicas",
        skillsHtml: "Alto nivel técnico usándolo durante 3 - 4 años en el trabajo y la escuela secundaria",
        skillsCss: "Alto nivel técnico usándolo durante 3 - 4 años en el trabajo, la escuela secundaria, proyectos personales y desafíos web",
        skillsJs: "Nivel de habilidad alto usándolo durante 3 - 4 años en el trabajo y proyectos personales",
        skillsPhp: "Nivel de habilidad medio usándolo durante 2 años en el trabajo y la escuela secundaria",
        skillsReact: "Habilidades avanzadas usándolo durante 2 - 3 años en el trabajo, la escuela secundaria y proyectos personales",
        skillsLaravel: "Nivel de habilidad básico usándolo durante 1 año en el trabajo",
        skillsReactNative: "Habilidades medias usándolo durante 1 - 2 años en el trabajo y proyectos personales",
        skillsNode: "Nivel técnico medio usándolo durante 1 año combinándolo con React en el trabajo y la escuela secundaria",
        skillsNext: "Nivel técnico moderado usándolo durante 1 año en proyectos personales",
        education: "Educación",
        skills: "Habilidades",
        contact: "Contacto",
        title: "Hola, soy Lucas Tisera",
        subtitle: "Desarrollador Full Stack",
        description: "¡Hola y bienvenido a mi portafolio! Mi nombre es Lucas Tisera y estoy emocionado de compartir contigo mis habilidades, experiencias y logros. Soy un desarrollador Full-Stack con pasión por el desarrollo de software. A través de este portafolio, mi objetivo es brindarle una comprensión integral de quién soy, el trabajo que he realizado y el valor que puedo aportar a su proyecto u organización.",
        btn: "Hablemos",
        btn2: "Descargar CV",
        contactTitle: "Contáctame",
        formNombre: "Nombre",
        formEmail: "Correo",
        formCel: "Celular",
        formMensaje: "Mensaje",
        formSubmit: "Enviar",
        emailSend: "Correo enviado correctamente",
        load: "Enviando...",
    }
}
const initialLang = "en"
const LangProvider = ({children}) => {
    const [lang, setLang] = useState(initialLang)
    const [texts, setTexts] = useState(translations[initialLang])
    
    const handleLang = (e) =>{
        if(e === "es"){
            setLang("es")
            setTexts(translations.es)
        }else{
            setLang("en")
            setTexts(translations.en)
        }
    }
    const data = { texts, handleLang, lang }

    return (
        <LangContext.Provider value={data}>
            {children}
        </LangContext.Provider>
    )
}

export {LangProvider};
export default LangContext;