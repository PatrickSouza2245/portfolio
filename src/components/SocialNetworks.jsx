import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  { name: "linkedin", link:"https://www.linkedin.com/in/patrick-souza-8b4966290" , icon: <FaLinkedinIn />},
  { name: "github", link: "https://github.com/PatrickSouza2245", icon: <FaGithub />},
  { name: "instagram", link: "https://www.instagram.com/pk_souzx" , icon: <FaInstagram />},
]


const SocialNetworks = () => {
  return (
    <section id='social-networks'>
      {socialNetworks.map((network) => (
        <a href={network.link} target='_blank' className="social-btn" id={network.name} key={network.name}> {network.icon} </a>
      ))}
    </section>
  )
}

export default SocialNetworks