import './App.css';
import Automaticallyrecord from './components/Automaticallyrecord';
import Bannercomponent from './components/Bannercomponent';
import Footer from './components/Footer';
import Letdownload from './components/Letdownload';
import Recordtranscribesection from './components/Recordtranscribesection';
import Salescriptsection from './components/Salescriptsection';
import Optimizedsection from './components/Optimizedsection';
import Chooseplan from './components/Chooseplan';


function App() {


  return (
  <>

 <Bannercomponent/>
 <Recordtranscribesection/>
 <Automaticallyrecord/>
 <Salescriptsection/>
 <Chooseplan/>
 <Letdownload/>
<Optimizedsection/>
 <Footer/>  
</>
  );
}

export default App;
