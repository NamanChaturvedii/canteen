
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home.js"
import TeaCoffee from "./Pages/TeaCoffee.js"
import Chats from "./Pages/Chats.js"
import SouthInd from "./Pages/SouthInd.js"
import Momos from "./Pages/Momos.js"
import Combos from "./Pages/Combos.js"
import Mocktail from "./Pages/Mocktail.js"
import Lassi from "./Pages/Lassi.js"
import OnMRPItem from "./Pages/OnMRPItem.js"
import Sweet from "./Pages/Sweet.js"
import Shake from "./Pages/Shake.js"
import Cart from "./Pages/Cart.js"
import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import data from "./Components/Data.js";
import Component from './Components/Component.js';
// import Layout from './Components/Layout.js';


// function useState() {
//   const component = data.map(item => {
//     return (
//       <Component
//         photo={item.photo}
//         name={item.name}
//         desc={item.desc}
//         mrp={item.mrp}
//       ></Component>
//     )
//   })
// }


function App() {
  // const prps = data.map(item => {
  //   return (
  //     <Component
  //       key={item.id}
  //       photo={item.photo}
  //       name={item.name}
  //       desc={item.desc}
  //       mrp={item.mrp}
  //     />
  //   )
  // })

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/chats' element={<Chats></Chats>} />
        <Route path='/tea'  element={<TeaCoffee  ></TeaCoffee>}/>
        <Route path='/south' element={<SouthInd></SouthInd>} />
        <Route path='/momos' element={<Momos></Momos>} />
        <Route path='/combos' element={<Combos></Combos>} />
        <Route path='/mocktail' element={<Mocktail></Mocktail>} />
        <Route path='/lassi' element={<Lassi></Lassi>} />
        <Route path='/mrp' element={<OnMRPItem></OnMRPItem>} />
        <Route path='/sweet' element={<Sweet></Sweet>} />
        <Route path='/shake' element={<Shake></Shake>} />
        <Route path='/cart' element={<Cart></Cart>} />
      </Routes>


      {/* <Footer></Footer> */}

    </>
  );
}

export default App;
