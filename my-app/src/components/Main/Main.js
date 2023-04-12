import React, { useState } from 'react';
import './Main.css';
import HeroSection from '../Hero/HeroSection';
import Intro from '../Introduction/Intro';
import Benefits from '../Benefits/Benefits';
import SingleParagraph from '../SingleParagraph/SingleParagraph';
import UpgradePro from '../Upgrade/UpgradePro';
import DoubleParagraph from '../DoubleParagraph/DoubleParagraph';
import Reviews from '../Reviews/Reviews';
import Gallery from '../Gallery/Gallery';
import FAQs from '../FAQs/FAQs';

function Main() {
    return (
        <main>   
            <HeroSection/>  
            <Intro/>
            <Benefits/>
            <SingleParagraph/>
            <UpgradePro/>
            <DoubleParagraph/>
            <Reviews/>
            <Gallery/>
            <FAQs/>
        </main>
    )
}

export default Main;