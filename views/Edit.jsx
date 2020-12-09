const React = require('react');
const Layout = require('./Layout/Layout.jsx');
class Edit extends React.Component{
    render() {
        console.log(this.props.items);
        return (
            <Layout
            title={`${item._id} Edit Page`}
             stylesheet="/css/edit.css"
             js="/server.js">

            </Layout>
        )
    }
}

module.exports = Edit;