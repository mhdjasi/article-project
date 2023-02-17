import { Form, Button } from "react-bootstrap"
import {ArticleContext} from '../contexts/ArticleContext';
import {useContext, useState} from 'react';

const EditForm = ({article}) =>{

    const id = article.id;

    const [title, setTitle] = useState(article.title);
    const [content, setContent] = useState(article.content);
    const [date, setDate] = useState(article.date);

    const {updateArticle} = useContext(ArticleContext);

    const updatedArticle = {id, title, content, date}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateArticle(id, updatedArticle)
    }

     return (

        <Form  onSubmit={handleSubmit}>
            <Form.Group style={{marginBottom:"10px"}}>
                <Form.Control
                    type="text"
                    placeholder="Title *"
                    name="title"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
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
                    onChange={(e)=> setContent(e.target.value)}
                />
            </Form.Group>
            <Form.Group style={{marginBottom:"10px"}}>
                <Form.Control
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={date}
                    onChange={(e)=> setDate(e.target.value)}
                />
            </Form.Group>
            <div style={{marginBottom:"10px",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
                <Button  variant="success" type="submit" block>
                    Edit Article
                </Button>
            </div>
        </Form>

     )
}

export default EditForm;