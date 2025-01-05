import Avatar from '../img/eu.jpg'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} width={250} alt="Patrick Souza" />
      <p className="title">Desenvolvedor Fullstack</p>
      <SocialNetworks />
      <InformationContainer />
      {/* <a href="" className="btn">Download curriculo</a> */}
       </aside>
  )
}

export default Sidebar