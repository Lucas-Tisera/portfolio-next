import styles from './styles/ImageContainer.module.css'
import Image from 'next/image'
import mypic from '../../public/static/myPictureFocusedAgain2.png'
export function WindowsImageViewer(){
    return(
        <section className={styles.pictureContainer}>
            <div className={styles.navContainer}>
                <ul className={styles.nav}>
                    <li className={styles.navItemMenu}>
                        <div className='bx bx-images'></div>
                    </li>
                    <li className={styles.navItemName}>
                        <p>PictureUsedInMyPort...</p>
                    </li>
                    <div style={{"display":"flex", "justifyContent": "space-between", "width": "100%"}}>

                    <li className={styles.navItemControls}>
                        <div style={{marginBottom: "6px"}}>...</div>
                    </li>
                    <li className={styles.navItemControls}>
                        <div className='bx bx-zoom-out'></div>
                    </li>
                    <li className={styles.navItemControls}>
                        <div className='bx bx-zoom-in'></div>
                    </li>
                    </div>
                    <li className={styles.navItemPorcent}>
                        <p>45 %</p>
                    </li>
                    <div className={styles.functionControllers}>
                        <li className={styles.navItemFunction}>
                        <div className='bx bx-minus'></div>

                        </li>
                        <li className={styles.navItemFunction}>
                            <div className='bx bx-checkbox'></div>
                        </li>
                        <li className={styles.navItemFunctionX}>
                            <div className='bx bx-x'></div>
                        </li>
                    </div>
                </ul>
            </div>
            <Image priority src={mypic} alt="Me" className={styles.picture} />
        </section>
    )
}