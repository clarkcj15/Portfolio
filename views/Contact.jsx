const React = require('react');
const Layout = require('./Layout/Layout.jsx');
class Contact extends React.Component{
    render() {
        console.log(this.props.items);
        return (
            <Layout
            title={`Contact Page`}
             stylesheet="/css/contact.css"
             js="/server.js">

            </Layout>
        )
    }
}

module.exports = Contact;