import { Form, Button } from "react-bootstrap"

import {ArticleContext} from '../contexts/ArticleContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addArticle} = useContext(ArticleContext);

    const [newArticle, setNewArticle] = useState({
        title:"", content:"", date:""
    });

    const onInputChange = (e) => {
        setNewArticle({...newArticle,[e.target.name]: e.target.value})
    }

    const {title, content, date} = newArticle;

    const handleSubmit = (e) => {
        e.preventDefault();
        addArticle(title, content, date);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group style={{marginBottom:"10px"}}>
                <Form.Control
                    type="text"
                    placeholder="Title *"
                    name="title"
                    value={title}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group style={{marginBottom:"10px"}}>
                <Form.Control
                    as="textarea"
                    placeholder="Content"
                    rows={3}
                    name="content"
                    value={content}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group style={{marginBottom:"10px"}}>
                <Form.Control
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={date}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <div style={{marginBottom:"10px",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
            <Button variant="success" type="submit" block>
                Add New Article
            </Button>
            </div>
        </Form>

     )
}

export default AddForm;