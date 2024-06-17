import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

export default function PrimaryButton({ variant='gray', rounded='unset', backgroundImage }: IButtonProps) {
	return (
		<button className={styles.primaryButton + ' ' + 'button-scale'} data-variant={variant} data-rounded={rounded}>
			{backgroundImage && <Image src={backgroundImage} alt='img' layout='fill'/>}
		</button>
	)
}
