import React from 'react';
import Contact from '../Composants/Contact';
import DateWork from '../Composants/DateWork';
import Education from '../Composants/Education';
import Expertise from '../Composants/Expertise';
import Interets from '../Composants/Interets';
import Profil from '../Composants/Profil';
import './style.scss';

export default function Cv() {
  return (
    <div >
   <Contact/> 
   <Profil/>
   <Education/>
   <DateWork/>
   <Expertise/>
   <Interets/>
    </div>
  );
}


