import React, { ReactElement } from 'react'

interface BoxProps {
   icon?: string
   message: string
}
const BoxContent: React.FC<BoxProps> = ({ icon, message }): ReactElement => {
   return (
      <div className="box">
         {icon && <img src={icon} alt="icon"/>}
         <p>{message}</p>
      </div>
   )
}

export default BoxContent

