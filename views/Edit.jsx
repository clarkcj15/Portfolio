const React = require('react');
const Layout = require('./Layout/Layout.jsx');
class Edit extends React.Component{
    render() {
        const {_id, title, link, img, description, isComplete} = this.props.item;
        return (
            <Layout
            title={`${title} Edit Page`}
             stylesheet="/css/edit.css">
                 <form action={`/page/${_id}?_method=PUT`} method="POST">
                 Project Title: <input type="text" name="title" value={title}/><br/>
                     Link to Project: <input type="text" name="link" value={link}/><br/>
                     Image: <input type="text" name="img" value={img}/><br/>
                     Description: <input type="text" name="description" value={description}/><br/>
                     Is this project complete? Check for yes. <input type="checkbox" name="isComplete" checked={isComplete}/><br/>
                     <input type="submit" name="" id="Add Project"/>

                 </form>
            </Layout>
        )
    }
}

module.exports = Edit;