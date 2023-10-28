
import './framework.css';
import './master.css';
import { Layout,Boss, Head, Sidebar } from './compenents/index';
import {Link } from 'react-router-dom'
import { 
  FaChalkboardTeacher as Pf,
   FaUserFriends as Mebs ,
    FaShoppingCart as Anc ,
    FaUserCog as Stg ,
   
} from "react-icons/fa";
function Admin(props) {
  return (

     <Boss>
      <Sidebar/>
      <Layout>
        <Head/>
       {props.children}
      </Layout>
   </Boss>
      
  );
}

export default Admin;
