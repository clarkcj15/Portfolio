const React = require('react');
const Layout = require('./Layout/Layout.jsx');
class Contact extends React.Component{
    render() {
        // console.log(this.props.items);
        return (
            <Layout
            title={`Contact Page`}
             stylesheet="/css/contact.css">
             <p>For all inquiries please submit the below form with your name, email address, and inquiry.</p>
            <form action="cj.clark915.php" method="post">
                <label for="firstandlastname">Name:</label>
                <input type="text" id="firstandlastname"/>
                <label for="email">Email Address:</label>
                <input type="text" id="email"/>
                <label for="message">Message:</label>
                <input type="text" id="message"/>
                <input type="submit" value="Submit"/>
            </form>

            <p>Find me on <a href="http://linkedin.com/in/cj-clark-parnell-1b859a43/">LinkedIn</a>!</p>
            <p>Take a look at my <a href="http://github.com/clarkcj15">GitHub</a>!</p>
            </Layout>
        )
    }
}

module.exports = Contact;