import React, { ReactElement } from 'react'
import icon_1 from '../assets/images/icons/icon-7.svg'
import icon_2 from '../assets/images/icons/icon-9.svg'
import icon_3 from '../assets/images/icons/icon-6.svg'
import icon_4 from '../assets/images/icons/icon-5.svg'

import Box from './box.component'

const BoxContent: React.FC = (): ReactElement => {
   return (
      <div className="box-content">
         <Box icon={icon_1} message='Localidad' />
         <Box icon={icon_2} message='Tratamiento' />
         <Box icon={icon_3} message='Fecha' />
         <Box icon={icon_4} message='Hora' />
         <Box message='Reservar' />
      </div>
   )
}

export default BoxContent

