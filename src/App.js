import './App.css';
import Card from './Card_Component/Cart_drawer/card';
import Header from './Header/header';
import { FaMap } from "react-icons/fa";
function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='title_main_page'>
        <p className='get_support'>Get Support</p>
        <FaMap className='icon' />
      </div>
      <div className="wrapper">

        <div class="card">
          <Card
            img='\Customer Engagementfirst_img.png' title='Customer Engagement' subtitle="Get your own mobile app for industry specific"
            price=" 100 DTSU*" 
          />
        </div>
        <div class="card">
          <Card
            img='\Actionable Insightsimage-2.png' title='Actionable Insighets' subtitle="Create Dashboards "
            price=" 100 DTSU*"
          />
        </div>
        <div class="card">
          <Card
            img='\Employees Productivity3.png' title='Employees Productivity' subtitle="KPI Builder , Work Conf,Create Oracle Requests"
            price=" 100 DTSU*"
          />
        </div>
        <div class="card">
          <Card
            img='\Operations Excellence4.png' title='Operations Excellence' subtitle="Tenant/lessee Managment"
            price=" 100 DTSU*"
          />
        </div>
      </div>
    </div >
  );
}

export default App;
