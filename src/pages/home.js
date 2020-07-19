import React, { Component } from "react";

import Header from '../components/header';
import Footer from '../components/footer';
import Navbar from "../components/NavBar";
import Sectionone from "../components/SectionOne";
import Sectiontwo from "../components/SectionTwo";
import Sectionthree from "../components/SectionThree";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <Sectionone />
                <Sectiontwo />
                <Sectionthree />
                <Footer />
            </div>
        );
    }
}
export default Home;