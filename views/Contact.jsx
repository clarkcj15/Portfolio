const React = require('react');
const Layout = require('./Layout/Layout.jsx');
class Contact extends React.Component{
    render() {
        // console.log(this.props.items);
        return (
            <Layout
            title={`Contact Page`}
             stylesheet="/css/contact.css">
            <p>PLEASE EMAIL ME AT cj.clark915@gmail.com for all inquiries</p>
            </Layout>
        )
    }
}

module.exports = Contact;