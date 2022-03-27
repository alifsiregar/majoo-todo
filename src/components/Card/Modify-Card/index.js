import { useState, useEffect } from 'react';
import { useStore } from "store/context";
import { Button } from 'components';

const ModifyCard = ({ data }) => {

    const { state, dispatch } = useStore();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [status, setStatus] = useState(0);

    const submitForm = (params) => {
        const updateList = state.todoData && state.todoData.map((item) => {

			if (item.id === params) {

				return { ...item, title, description: desc, status };

			}

			return { ...item, show: false };

        });

        const newList = {
            id: Math.floor(Math.random() * 99999999999999),
            title,
            description: desc,
            status,
            createdAt: new Date(),
        }

        dispatch({
            type: "set_data_todo",
            payload: data && Object.keys(data).length > 0 ? updateList : [...state.todoData, newList]
        });


        dispatch({
            type: "set_status_add",
            payload: false,
        });

        dispatch({
            type: "set_status_modify",
            payload: false,
        });
        dispatch({
            type: "set_selected_todo",
            payload: {},
        });
        
    }

    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            setTitle(data.title);
            setDesc(data.description);
            setStatus(data.status);
        }
    }, [])

    return (
        <>
            <div className="bg-frame" onClick={() => {

                dispatch({
                    type: "set_status_modify",
                    payload: false,
                });

                dispatch({
                    type: "set_status_add",
                    payload: false,
                });

                dispatch({
                    type: "set_selected_todo",
                    payload: {},
                });
            }} />
            <div className="modify-card">
                <div className="title-container">
                    <label htmlFor="title">
                        Edit Title:
                    </label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="title" id="title" />
                </div>
                <div className="desc-container">
                    <label htmlFor="description">
                        Edit Description:
                    </label>
                    <input type="text" onChange={(e) => setDesc(e.target.value)} value={desc} className="description" id="description" />
                </div>
                <div className="status-container">
                    <label htmlFor="status">
                        Edit Status:
                    </label>
                    <span style={{
                        cursor: "pointer"
                    }} onClick={() => setStatus( status === 0 ? 1 : 0)}>
                        { status === 1 ? "Finished" : "Unfinished" }
                    </span>
                </div>
                <Button type="inverse" text="SUBMIT" clickCard={() => submitForm(data && data.id)} />
            </div>
            <style>
                {`
                .bg-frame {
                  position: fixed;
                  top: 0;
                  bottom: 0;
                  right: 0;
                  left: 0;
                  background: #000;
                  opacity: 0.85;
                  z-index: 997;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
    
                .bg-frame + div.modify-card{
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  z-index: 998;
                  width: max-content;
                  background: #FFFFFF;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  padding: 20px;
                  
                }
              `}
            </style>
        </>
    )
}

export default ModifyCard