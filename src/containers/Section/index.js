import React from 'react'

const Section = ({title, children}) => {
    return (
        <>
            <div className="section">
                <span className="section-title">
                    {title}
                </span>
                <div className="child-container">
                    {children}
                </div>
            </div>
            <style>
                {`

                    .section{
                        margin: 32px auto;
                        width: 250px;
                    }

                    .section span.section-title{
                        font-size: 24px;
                        font-weight: 700;
                        margin-bottom: 32px;
                    }

                    .section div.child-container{
                        margin-top: 24px;
                    }

                    @media only screen and (min-width: 600px) {
                        .section{
                            width: 100%;
                            margin: 32px 32px;
                        }
                    }

                    @media only screen and (min-width: 1200px) {
                        .section{
                            margin: 32px auto;
                            max-width: 1200px;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default Section