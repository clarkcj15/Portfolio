const React = require('react');
const Layout = require('./Layout/Layout.jsx');
class New extends React.Component{
    render() {
        console.log(this.props.items);
        return (
            <Layout
            title={`New Project Page`}
             stylesheet="/css/new.css">

                 <form action="/page" method="POST">
                     Project Title: <input type="text" name="title" id=""/><br/>
                     Link to Project: <input type="text" name="link" id=""/><br/>
                     Image: <input type="text" name="img" id=""/><br/>
                     Description: <input type="text" name="description" id=""/><br/>
                     Is this project complete? Check for yes. <input type="checkbox" name="isComplete" id=""/><br/>
                     <input type="submit" name="" id="Add Project"/>
                 </form>
            </Layout>
        )
    }
}

module.exports = New;