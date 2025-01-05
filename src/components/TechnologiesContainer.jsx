import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiGit,
    DiSass,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", description: "Utilizo o HTML5 para estruturar e organizar o conteúdo das páginas web. Crio layouts responsivos e bem estruturados, garantindo a melhor experiência para o usuário." , icon: <DiHtml5/> },
    { id: "css", name: "CSS3", description: "Crio designs atraentes e responsivos. Uso Flexbox e Grid para organizar os elementos da página de maneira eficiente e manter a aparência perfeita em diferentes dispositivos." , icon: <DiCss3/> },
    { id: "js", name: "JavaScript", description: "Com JS, adiciono interatividade e dinamismo aos meus projetos. Domínio de funções, manipulação de DOM e integração de APIs para melhorar a experiência do usuário." , icon: <DiJsBadge/> },
    { id: "node", name: "Node.js", description: "Com o Node, crio servidores e APIs para suportar aplicações back-end. Ele me permite construir funcionalidades de servidor e integrar bancos de dados de forma eficiente." , icon: <DiNodejsSmall/> },
    { id: "mysql", name: "MySQL", description: "Uso o MySQL para gerenciar e armazenar dados em meus projetos. Ele me ajuda a construir bancos de dados eficientes e conectar a aplicações web para armazenamento de informações." , icon: <DiMysql/> },
    { id: "react", name: "React", description: "Apezar do breve conhecimento, uso o React para criar interfaces de usuário escaláveis e eficientes. Com componentes reutilizáveis e hooks, desenvolvo aplicações modernas e responsivas." , icon: <DiReact/> },
    { id: "sass", name: "Sass", description: "Com o Sass, escrevo estilos mais organizados e fáceis de manter. Uso variáveis, mixins e funções para otimizar o desenvolvimento e criar designs escaláveis." , icon: <DiSass/> },
    { id: "git", name: "Git", description: "Com o Git, controlo as versões do código e mantenho projetos organizados. O GitHub me permite colaborar e compartilhar código com outros desenvolvedores." , icon: <DiGit/> },

]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechnologiesContainer