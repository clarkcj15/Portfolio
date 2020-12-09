const React = require('react');
const AppLayout = require('./Layout/AppLayout.jsx');
const Layout = require('./Layout/Layout.jsx');
class Index extends React.Component{
    render() {
        console.log(this.props.items);
        return (
            <Layout>

            </Layout>
        )
    }
}

module.exports = Index;