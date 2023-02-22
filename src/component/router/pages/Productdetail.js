import React from 'react'
import Footer from '../../UI/Footer'
import Header from '../../UI/Header'
import { useParams } from 'react-router-dom'

export const Productdetail = () => {

    const data = useParams()
    console.log(data)
    return (
        <section>
            <Header />
            <h2 style={{ padding: "1rem", Color: "olive", fontFamily: "Stencil Std, fantasy", fontSize: "40px", marginTop: "30px", textAlign: "center", justifyContent: "center" }}>
                Product Details</h2>

            <h3> Directed to {data.p1} </h3>
            <Footer />
        </section>
    )
}
