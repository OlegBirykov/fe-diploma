import { Link } from 'react-router-dom';

function Completion() {  
  return (
    <main className="Completion"> 
      <Link to={process.env.PUBLIC_URL} className=""> 
        Вернуться на главную
      </Link>
    </main>
  )
}

export default Completion;