const React = require('react');
const Layout = require('./Layout/Layout.jsx');
class Aboutme extends React.Component{
    render() {
        // console.log(this.props.items);
        return (
            <Layout
            title={`About CJ Clark - Web Developer`}
             stylesheet="/css/contact.css">
                <h3><a href={'/contact'}>Contact Me</a></h3>

                <p id="para-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, accusamus! Ab, 
                    dicta omnis inventore impedit aperiam error itaque assumenda nisi autem nostrum 
                    at magni. Quam ipsam iusto sunt itaque excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Doloremque, eaque natus dicta quod ad saepe aliquam nobis at aperiam assumenda dignissimos veritatis 
                    necessitatibus maiores veniam corrupti cupiditate totam quae eius!</p>
                
                <img src="https://res.cloudinary.com/dwpxepy1m/image/upload/v1607565467/IMG_7809_jfmabh.jpg" alt="" width="620px" height="450px"/>
            </Layout>
        )
    }
}

module.exports = Aboutme;