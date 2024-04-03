import React, { useState } from 'react';
import MenuServicio from './MenuServicio';
import OptionMonitoreo from './OptionMonitoreo';
import OptionHogar from './OptionHogar';
import OptionOficina from './OptionOficina';
import OptionPinlet from './OptionPinlet';
import "../../../styles/services/optionservicio.css"

function OptionsServicio() {
  const [visibleOption, setVisibleOption] = useState(null);

  return (
    <div>
      <MenuServicio onOptionClick={setVisibleOption}/>
      <div className="options-servicio">
        <div className={visibleOption === 'monitoreo' ? 'option visible' : 'option'}>
          <OptionMonitoreo/>
        </div>

        <div className={visibleOption === 'hogar' ? 'option visible' : 'option'}>
          <OptionHogar/>
        </div>

        <div  className={visibleOption === 'oficina' ? 'option visible' : 'option'}>
          <OptionOficina/>
        </div>
        
        <div  className={visibleOption === 'pinlet' ? 'option visible' : 'option'}>
          <OptionPinlet/>
        </div>
      </div>
    </div>
  );
}

export default OptionsServicio;