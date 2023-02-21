import React from 'react'
import Header from '../../UI/Header'
import Footer from '../../UI/Footer'
import { Container,Card } from 'react-bootstrap'

export const Store = () => {
  return (
    <div>
      <Header />


      <h2 style={{ padding: "1rem", Color: "olive", fontFamily: "Stencil Std, fantasy", fontSize: "70px", marginTop: "30px", textAlign: "center", justifyContent: "center" }}>Welcome To Store</h2>
      <Container style={{margin:"5rem"}}>

        <Card>
          <h2> OUR ITEMS</h2>
          <p>
            Online Store Content: Detailed Explanation
            Whether it’s for clothing or technology, more and more people now shop online and frequently. According to Business Insider, 78 percent of Americans 15 and older have purchased something online. Most online shoppers browse offers on the Internet regularly and make an online purchase a few times a month or more.

            There are millions of online stores, and the competition is always just a click away. Because the e-commerce market is highly competitive, online shop operators should be aware of how critically important content is for their online store and the influence they have on purchasing decisions. So it’s important for content to guide users to action and prompt them to make a purchase.

          ror-free. Professional and informative product descriptions help the user perceive the online store as reputable, and the content should also appeal to its target audience at an emotional level.

            A high search engine ranking is extremely important, so web copy must use correct search engine optimization (SEO) techniques. Comprehensive keyword research should take into account what potential customers are searching for, and it’s recommended that relevant keywords appear in the headline and at the beginning of the text.
          </p>
        </Card>

      </Container>
      <Footer />
    </div>
  )
}
