import React from 'react';
import Aux from '../../hoc';
import './Layout.css';

const layouts = (props) =>(
    <Aux>
      <div >
          Toolbar, Drawer, Backdrop
      </div>
        <main className='Content'>
            {props.children}
        </main>
    </Aux>

);

export default layouts;
