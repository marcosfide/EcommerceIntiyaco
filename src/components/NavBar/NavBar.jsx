import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import logoIntiayco from "./assets/logo-intiyaco-white.png"
import { useEffect, useState } from "react"
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/fireBaseConfig'

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('name'))

        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return {id: doc.id, ...fields}
                })
                setCategories(categoriesAdapted)
            })
    }, [])


    return (
        <nav className="NavBar">
            <Link to='/'>
                <img src={logoIntiayco} alt="cart" className='LogoIntiyaco' /> 
            </Link>
            <div className="Categories">
                {
                    categories.map(cat => (
                        <Link key={cat.id} to={`/category/${cat.slug}`} className={'Option'}>{cat.name}</Link>
                    ))
                }
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar