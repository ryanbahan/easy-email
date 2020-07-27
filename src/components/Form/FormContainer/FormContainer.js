import React from 'react';
import './FormContainer.css';
import DropdownContainer from '../DropdownContainer/DropdownContainer';
import Exporter from '../Exporter/Exporter';
import PropTypes from 'prop-types';

export const FormContainer = ({ menus }) => {

  const menuContainers = menus.map(menu => (
    <DropdownContainer
      key={menu.title}
      formItems={menu.formItems}
      title={menu.title}
    />
  ));

  return (
  <section className="builder">
    <div className="menu-containers-wrapper">
      {menuContainers}
    </div>
    <div className="buttons-wrapper">
      <Exporter />
    </div>
  </section>
  )
}

FormContainer.propTypes = {
  menus: PropTypes.array,
}