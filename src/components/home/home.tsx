import './home.scss';
import Info from '../info/info'
import Content from '../content/content'


const Home = () => {
  return (
    <div className='mainDiv'>
      <div className="infoDiv">
        <Info />
      </div>
      <div className="contentDiv">
        <Content />
      </div>
    </div>
  )
}

export default Home