import './socialMedia.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
const SocialMedia = () => {
  const resume = "https://drive.google.com/file/d/1OC5chHBEQl5qPojmlYG2sShyjnpvctDa/view?usp=drive_link";
  const redirectToSite = (url:string) =>{
    window.open(url,'_blank');
  }
  return (
    <div className='socialMedia'>
        <h4 onClick={() => redirectToSite('https://www.linkedin.com/in/naveenbahunadham')}>LinkedIn <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare}/></h4>
        <h4 onClick={() => redirectToSite('https://www.instagram.com/naveen_bahunadham')}>Instagram <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare}/></h4>
        <h4 onClick={() => redirectToSite('https://github.com/naveenbabu4')}>GitHub <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare}/></h4>
        <h4 onClick={() => redirectToSite(resume)}>Resume <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare}/></h4>
    </div>
  )
}

export default SocialMedia