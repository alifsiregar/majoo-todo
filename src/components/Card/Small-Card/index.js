import { Button } from 'components';
import { formatTime } from 'utils';
import { useStore } from "store/context";

const SmallCard = ({ data }) => {

    const { state, dispatch } = useStore();

    const getDetail = (params) => {
        state.todoData && state.todoData.forEach((item) => {

            if (item.id === params) {

                dispatch({
                    type: "set_selected_todo",
                    payload: item,
                });

                dispatch({
                    type: "set_status_select",
                    payload: true,
                });

            }

        });
    }

    const setEdit = (params) => {
        state.todoData && state.todoData.forEach((item) => {

            if (item.id === params) {

                dispatch({
                    type: "set_selected_todo",
                    payload: item,
                });

                dispatch({
                    type: "set_status_modify",
                    payload: true,
                });

            }

        });
    }

    const deleteItem = (params) => {
        const newList = state.todoData && state.todoData.filter((item) => item.id !== params);

        dispatch({
            type: "set_data_todo",
            payload: newList,
        });

    }

    return (
        <>
            <div className="small-card">
                <span className="date">
                    {formatTime(new Date(data.createdAt))}
                </span>
                <span className={`title ${data.status === 1 && "finished"}`}>
                    {data.title}
                </span>
                <div className="card-buttons">
                    <Button text="EDIT" type="inverse" clickCard={() => setEdit(data.id)} />
                    <Button text="DETAIL" type="inverse" clickCard={() => getDetail(data.id)} />
                    {data.status === 0 && <Button text="DELETE" type="inverse" clickCard={() => deleteItem(data.id)} />}

                </div>
            </div>
            <style>
                {`
                    .small-card{
                        display: flex;
                        flex-direction: column;
                        border: 1px solid #1D1C1A;
                        width: 250px;
                        padding: 5px;
                    }

                    .small-card span.date{
                        font-size: 14px;
                    }

                    .small-card span.title{
                        font-size: 24px;
                        font-weight: 700;
                    }

                    .small-card div.card-buttons{
                        margin-top: 18px;
                        display: flex;
                        justify-content: space-around;
                    }

                    .small-card span.title.finished{
                        font-size: 24px;
                        font-weight: 700;
                        text-decoration: line-through;
                    }
                `}
            </style>
        </>
    )
}

export default SmallCard