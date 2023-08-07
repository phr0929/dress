import { useNavigate } from 'react-router-dom';
import './main.css';

const Main = (() => {

  const navigate = useNavigate();
  
  return (
    <div className="mainLayout">
      <div onClick={()=>navigate('/avatar')}>아바타</div>
    </div>
  );
})

export default Main;
