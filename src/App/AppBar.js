import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  display:grid;
  grid-template-columns:180px auto 100px 100px
  `

export default function() {
   return (
       <Bar> 
            <div>cryptoDash</div>
            <div />
            <div>dashboard</div>
            <div>settings</div>
       </Bar>
       )    
    }