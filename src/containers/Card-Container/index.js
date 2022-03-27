import { Card } from 'components';

const CardContainer = ({ data, type }) => {

    

    return (
        <>
            <div className="card-container">
                {data && data.filter((item) => type === "finished" ? item.status === 1 : item.status === 0).sort((a, b) => type === "finished" ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((item, idx) => {
                    return <Card key={String(idx)} type="small" data={item} />
                })}
            </div>
            <style>
                {`
                    .card-container{
                        display: flex;
                        flex-wrap: wrap;
                        gap: 16px;
                    }
                `}
            </style>
        </>
    )
}

export default CardContainer