const React = require('react');
const Layout = require('./Layout/Layout.jsx');
class Aboutme extends React.Component{
    render() {
        // console.log(this.props.items);
        return (
            <Layout
            title={`About CJ Parnell - Web Developer`}
             stylesheet="/css/contact.css">
                <h3><a href={'/contact'}>Contact Me</a></h3>

                <p id="para-info">
                My passion for web development stems from my passion for life! Technology is <br/>
                important to every facet of our lives. I have a Bachelor's Degree from Beloit College with <br/>
                a double major in Sociology and Critical Identity Studies and a minor in Environmental Studies. <br/>
                My focus in all of my work is understanding the "why" and "how". Tinkering is what I do; whether I am working on an app, <br/>
                designing and building something new for my home, or playing Dungeons and Dragons, I love to get my hands dirty in the inner <br/>
                workings of everything. I have a penchant for new challenges and team work. Evey time I face any adversity I see it as a teachable <br/>
                moment rather than a burden to overcome. Pronouns (They/Them)<br/>

                Check out some of my past projects in my <a href={'/show'}>Project Directory</a>.
                </p>
                
                <img src="https://res.cloudinary.com/dwpxepy1m/image/upload/v1607565467/IMG_7809_jfmabh.jpg" alt="" width="620px" height="450px"/>
            </Layout>
        )
    }
}

module.exports = Aboutme;