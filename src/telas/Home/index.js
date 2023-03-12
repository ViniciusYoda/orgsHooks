/* eslint-disable prettier/prettier */

import React from 'react';

import Topo from './componente/Topo';
import Produtores from './componente/Produtores';

export default function Home() {
   return (
      <>
         <Produtores topo={Topo}/>
      </>
   )
}