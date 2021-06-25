import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppProvider from './AppProvider';
//import PostsList from './components/PostsList';
//import NewPost from './components/NewPost';
//import ViewPost from './components/ViewPost';
//import EditPost from './components/EditPost';
//import Fetch from './components/Fetch';

function App() {    
  return (
    <AppProvider>
      <Router>
          <Header />
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/posts/new'} component={NewPost} />
            <Route path={process.env.PUBLIC_URL} component={PostsList} />
          </Switch> 
          <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;