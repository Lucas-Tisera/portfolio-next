import Link from "next/link"
import styles from './styles/Navigation.module.css'

const links =[
    {
        label: 'Home',
        route: '/'
    },{
        label: 'About',
        route: '/about'
    },{
        label: 'Education',
        route: '/education'
    },{
        label: 'Skills',
        route: '/skills'
    },{
        label: 'Contact',
        route: '/contact'
    }
]
export function MainHeader(){
    return(
      <>
        <header className={styles.header}>
          <nav className={styles.navigationContainer}>
            <Link href="/" className={styles.logo}>
              Lucas.T - Portfolio
            </Link>
            <div className="bx bx-menu" id={styles.menuIcon}/>
            <ul className={styles.navigation}>
                {links.map(({label, route}) => (
                  <li key={route} className="active">
                    <Link href={route}>
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </header>
                </>
    )
}