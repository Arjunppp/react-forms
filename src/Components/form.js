import React, { useEffect, useState } from 'react';
import styles from '../Styles/styles.module.css';

export const MyForm = () => {

    const [head, setHead] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState(false);
    useEffect(() => {
        document.getElementById('showHead').value = head;
        document.getElementById('shoeBody').value = body;

        if(error)
        {
            setTimeout(() => {setError(false)} ,1500)
        }

    }, [head, body ,error]);

    const creatBlog = (event) => {
        event.preventDefault();
        if (head === '' || body === '') {
            
            setError(true);

        }
        else{
           
            
            
        }

    }

    return (
        <>
            <form onSubmit={creatBlog} className={styles.myForm}>
                <input type='text' onChange={(e) => { setHead(e.target.value) }} id='blogHeading' name='blogHead'></input>
                <textarea id='blogData' onChange={(e) => { setBody(e.target.value) }} name='blogData'></textarea>
                <button type='submit'>Create Blog</button>
            </form>
            <div className={styles.duplicate}>
                <input type='text' id='showHead'></input>
                <textarea id='shoeBody'></textarea>
            </div>
            {error && <p>Either head or body is missing</p>}
           
        </>
    );
}