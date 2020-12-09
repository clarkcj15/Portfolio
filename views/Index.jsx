const React = require('react');
const Layout = require('./Layout/Layout.jsx');
class Index extends React.Component{
    render() {
        console.log(this.props.items);
        return (
            <Layout
            title="Index Page"
             stylesheet="/css/index.css"
             js="/server.js">

            </Layout>
        )
    }
}

module.exports = Index;