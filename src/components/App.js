import React,{useState} from 'react';
import Header from '../components/ui/Header.jsx';
import Footer from '../components/ui/Footer.jsx';
import {ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import MyProjects from './MyProjects.jsx';
import Skills from './Skills.jsx';
import Cauvery from './Cauvery.jsx';

function App() {

  const [selectedIndex , setSelectedIndex] = useState(0);
  const [value , setValue] = useState(0);

  return (
    
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/"><Home value={value} setValue={setValue}/></Route> 
          <Route exact path="/myprojects"><MyProjects/></Route>
          <Route exact path="/cauvery" render={()=><Cauvery />} />
          <Route exact path="/ecommerce" component={()=><div>E-Commerce</div>} />
          <Route exact path="/nisarga" component={()=><div>Nisarga</div>} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" ><Skills /></Route> 
          <Route exact path="/contact" component={()=><div>Contact</div>} />
          <Route exact path="/signin" component={()=><div>Sign In</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
