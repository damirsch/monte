'use client'

import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Header from '@/components/header'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Image from 'next/image'
import { gsap } from 'gsap'
import SecondaryButton from '@/components/buttons/SecondaryButton'

export default function FirstScreen() {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => { 
		const handleLoad = () => {
			setLoaded(true)
			const tl = gsap.timeline({delay: 0.7})
			tl.add('start')
				.to('.text-from-bottom span', { duration: 1.4, y: 0, stagger: 0.05, scale: 1, ease: 'power4.out' }, 'start')
				.to('.background-scale', { duration: 1.8, scale: 1, opacity: 1, ease: 'power3.out' }, 'start')
				.to('.button-right-move', { duration: 1, scale: 1, ease: 'power3.out' }, 'start')
				.to('.button-right-move', { duration: 1.3, width: 196, ease: 'power2' }, 'start+=0.6')
				.to('.button-right-move p', { duration: 1, opacity: 1, display: 'block', ease: 'power3.out' }, 'start+=1.3')
				.to('.button-scale', { duration: 1.6, scale: 1, ease: 'power3.out' }, 'start')
				.to('.img-scale', { duration: 1, scale: 1, stagger: 0.1, ease: 'power3.out' }, 'start')
				.to('.text-from-top', { duration: 0.8, opacity: 1, y: 0, ease: 'power2.out' }, 'start+=0.2')
				.to('.text-from-left', { duration: 0.8, opacity: 1, x: 0, ease: 'power2.out' }, 'start+=0.2')
				.to('.image-from-bottom span', { duration: 1.6, y: 0, ease: 'power4.out' }, 'start+=0.4')
				.to('.text-from-bottom-with-opacity span', { duration: 1.4, y: 0, opacity: 1, stagger: 0.1 , ease: 'power4.out' }, 'start+=0.5')
		}
		handleLoad()
	}, [loaded]);

	return (
		<div className={styles.firstScreen}>
			<div className={styles.leftBlock}>
				<Header/>
				<div className={styles.mainWrapper}>
					<p className={styles.preTitle + ' ' + 'text-from-top'}>Building Your Dreams</p>
					<div className={styles.title}>
						<p className='text-from-bottom'><span>Real Estate in Dubai:</span></p>
						<p className='text-from-bottom'><span>Ideal for Living and</span></p>
						<p className='text-from-bottom'><span>Investing</span></p>
					</div>
				</div>
				<div className={styles.buttons}>
					<SecondaryButton backgroundImage='/phone.svg'/>
					<button className={styles.button}>
						<div className={styles.block + ' ' + 'text-from-left'}>
							<p>Explore All</p>
							<p>Our Properties</p>
						</div>
						<div className={styles.imageWrapper + ' ' + 'img-scale'}>
							<div className={styles.icon}></div>
							<div className={styles.bage}>
								<Image src='/link.svg' alt='link' layout='fill'/>
							</div>
						</div>
					</button>
				</div>
			</div>
			<div className={styles.rightBlock}>
				<div className={styles.wrapper}>
					<div className={styles.background + ' ' + 'background-scale'}></div>
					<div className={styles.header}>
						<p className='text-from-bottom-with-opacity'><span>More than 1500 real estate properties</span></p>
						<p className='text-from-bottom-with-opacity'><span>From $145,000 with a yield of 10% per annum</span></p>
						<div className={styles.buttons}>
							<PrimaryButton variant='transparent' backgroundImage='/heart.svg'/>
							<PrimaryButton variant='light' backgroundImage='/house.svg'/>
						</div>
					</div>
					<button className={styles.downloadBtn + ' ' + 'button-scale'}>
						<div>
							<p>catalog </p>
							<p>download</p>
						</div>
						<div className={styles.imageWrapper}>
							<Image src='/download.svg' alt='download' layout='fill'/>
						</div>
					</button>
				</div>
			</div>
		</div>
	)
}
