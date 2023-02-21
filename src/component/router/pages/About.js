import React from 'react'
import Header from '../../UI/Header'
import Footer from '../../UI/Footer'
import { Card, Container } from 'react-bootstrap'


export const About = () => {
  return (
    <div>
      <Header />


      <h2 style={{padding:"1rem",Color:"olive", fontFamily:"Stencil Std, fantasy", fontSize:"70px", marginTop:"30px", textAlign:"center", justifyContent:"center"}}>Welcome To About us</h2>
      <Container>

        <Card>
          <h2> OUR JOurney</h2>
          <p> 1. Tell a story.
            In one study from Stanford, students were asked to give one-minute speeches containing three statistics and one story. Only 5% of listeners remembered a single statistic, while 63% remembered the stories. My point? Customers identify with the real-life people and origins behind brands. It doesn’t matter whether that story involves a generational family saga, or a simple lightbulb moment with a college roommate – just tell us what you’ve got!

            2. Speak to your customers.
            As much as customers want to hear the story of what makes your company unique, they also want to know how your company will help them. How will your products make their lives easier? Why should they choose your product ahead of everything else on the market?

            In order to effectively speak to your customers, you also need to know your audience really well. As you write, it will help to construct a mini customer profile to refer to – one that goes beyond the basics of age, occupation, and location. Think about what your products can tell you about your customers. For example, someone selling upscale cutlery can infer that their customers like to cook. Sharing a favorite recipe on the About Us page would be a simple way to connect with that particular demographic.

            3. Showcase your design.
            94% of website credibility comes from web design, which means that a visually appealing About Us page is just as important as a well written one. Whether you hire a web designer or handle it yourself, you’ll want to outfit your page with a professional layout that draws attention to the text and images you’ve put on the screen.

          </p>
        </Card>
       
      </Container>
      <Footer />
    </div>
  )
}
