import React, { ReactElement } from 'react'

interface CardProps {
   source?: string
   title: string
   description: string
   message?: string
   classNameTitle?: string
   classNameDescription?: string
   classNameHeader?: string
}
const Card: React.FC<CardProps> = ({ source, title, description, message, classNameTitle, classNameDescription, classNameHeader }): ReactElement => {
   return (
      <article className="card">
         <div className={classNameHeader ? classNameHeader : 'card-header'}>
            <img src={source} alt="icon"/>
         </div>
         <h2 className={classNameTitle}>{title}</h2>
         {!classNameTitle && (<p className='card-description'>{description}</p>)}

         {classNameTitle && (
            <div className='card-footer'>
               <h2 className={classNameTitle}>{title}</h2>
               <p className={classNameDescription}>{description}</p>
               <button className='card-button'>
                  {message}
               </button>
            </div>
         )}
      </article>
   )
}

export default Card
