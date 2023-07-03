import React from 'react'
import Allsection from './home/Allsection'
import OurServises from './home/Allsection-items/OurServises'
import Footer from './home/Footer'
import FooterSearch from './home/FooterSearch'
import News from './home/News'
import SearchLearningCenter from './home/SearchLearningCenter'
import HomeComment from './home/HomeComment'
import Teacher from './home/Teacher'

export default function Home() {
    return (
        <div className="main">
            <div className='home'>
                <div className="home-item">
                    <SearchLearningCenter />
                    <Allsection />
                    <OurServises />
                    <Teacher />
                    <HomeComment />
                    <News />
                    <FooterSearch />
                    <Footer />
                </div>
            </div>
        </div>
    )
}
