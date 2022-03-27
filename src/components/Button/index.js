const Button = ({ text, type, clickCard }) => {
    return (
        <>
            <div onClick={() => clickCard()} className={`button-type ${type === "inverse" && type}`}>
                {text}
            </div>
            <style jsx>
                    {`
                        div.button-type.inverse  {
                            border: none;
                            background: #1D1C1A;
                            font-size: 16px;
                            font-weight: 600;
                            padding: 5px 10px;
                            border-radius: 12px;
                            color: white;
                            cursor: pointer;
                        }

                        div.button-type{
                            border: none;
                            background: white;
                            font-size: 16px;
                            font-weight: 600;
                            padding: 5px 10px;
                            border-radius: 12px;
                            color: #1D1C1A;
                            cursor: pointer;
                        }
                    `}
            </style>
        </>
    )
}

export default Button