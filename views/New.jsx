const React = require('react');
const Layout = require('./Layout/Layout.jsx');
class New extends React.Component{
    render() {
        console.log(this.props.items);
        return (
            <Layout
            title={`New Project Page`}
             stylesheet="/css/new.css"
             js="/server.js">

            </Layout>
        )
    }
}

module.exports = New;