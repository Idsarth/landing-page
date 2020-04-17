import React, { ReactElement } from 'react'

interface BannerProps {
   source: string
   className?: string
   classNameLayout?: string
}
const Banner: React.FC<BannerProps> = ({ source, children, className, classNameLayout }): ReactElement => {
   return (
      <div className={`${classNameLayout ? classNameLayout : 'l-banner'}`}>
         <div className="banner container">
            {children}
         </div>
         <img className={className} src={source}  />
      </div>
   )
}

export default Banner
