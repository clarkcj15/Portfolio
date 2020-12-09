const React = require('react');
const Layout = require('./Layout/Layout.jsx');
class Show extends React.Component{
    render() {
        console.log(this.props.items);
        return (
            <Layout
            title={`${item._id} Show Page`}
             stylesheet="/css/show.css"
             js="/server.js">

            </Layout>
        )
    }
}

module.exports = Show;