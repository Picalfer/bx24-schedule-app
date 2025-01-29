import React, { useState } from "react";
import BX24API from './bx24'

export const AddTask = () => {
    
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
    });

    const onChange = (event) => {
        setTaskData({
            ...taskData,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        console.log('начал работу')
        const result = await BX24API.callMethod(
            'tasks.task.add',
            { fields: { TITLE: taskData.title, DESCRIPTION: taskData.description, RESPONSIBLE_ID: 1 } }
        );

        console.log('result =', result);
    };

    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" name="title" value={taskData.title} onChange={onChange} />
            <input type="text" name="description" value={taskData.description} onChange={onChange} />
            <button type="submit">Добавить задачу</button>
        </form>
    </div>
}