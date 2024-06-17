import React from 'react'
import PrimaryButton from '../buttons/PrimaryButton'
import styles from './index.module.scss'
import Image from 'next/image'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className='image-from-bottom'>
				<span><Image src={'/logo.svg'} alt='logo' layout='fill'/></span>
			</div>
			<div className={styles.buttons}>
				<PrimaryButton backgroundImage='/map.svg'/>
				<PrimaryButton backgroundImage='/menu.svg'/>
			</div>
		</header>
	)
}
