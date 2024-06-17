import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

export default function SecondaryButton({ variant='dark', backgroundImage }: IButtonProps) {
  return (
    <button className={styles.secondaryButton + ' ' + 'button-right-move'} data-variant={variant}>
      <div className={styles.imageWrapper}>
        {backgroundImage && <Image src={backgroundImage} alt='img' layout='fill'/>}
      </div>
      {/* ! CHANGE STATIC TEXT INTO CHILDREN FROM PROPS ! */}
      <p>Contact Us Now</p>
		</button>
  )
}
