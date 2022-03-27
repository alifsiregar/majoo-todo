import { formatTime } from "utils";
import { useStore } from "store/context";

const BigCard = ({ data }) => {

  const { state, dispatch } = useStore();
  
  return (
    <>
      <div className="bg-frame" onClick={() => {

        dispatch({
          type: "set_status_select",
          payload: false,
        });

        dispatch({
          type: "set_selected_todo",
          payload: {},
      });
      }} />
      <div className={`big-card ${state && (state.selected && Object.keys(state.selectedTodo).length > 0) && "show"}`}>
        <span className="title">
          {data.title}
        </span>
        <span className="date">
          {formatTime(new Date(data.createdAt))}
        </span>
        <span className="description">
          { data.description }
        </span>
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

            .bg-frame + div.big-card{
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
              opacity: 0;
              visibility: hidden;
              transition: all 3s ease;
              height: 0;
            }

            .bg-frame + div.big-card.show{
              height: auto;
              opacity: 1;
              visibility: visible;
              transition: all 3s ease; 
            }

            div.big-card span.title{
              font-size: 32px;
              font-weight: 700;
            }

            div.big-card span.date{
              font-size: 20px;
            }

            div.big-card span.description{
              font-size: 16px;
            }
          `}
      </style>
    </>
  )
}

export default BigCard