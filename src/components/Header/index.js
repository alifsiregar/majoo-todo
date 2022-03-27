import { Button } from 'components';
import { useStore } from "store/context";

const Header = () => {

    const { dispatch } = useStore();

    return (
        <>
            <div className="header">
                <span className="logo">TODO APP</span>
                <div className="header-button">
                    <Button text="ADD TODO" type="normal" clickCard={() => {
                        dispatch({
                            type: "set_status_add",
                            payload: true,
                        });
                    }} />
                </div>
            </div>
            <style>
                {`
                    .header{
                        background: #1D1C1A;
                        color: #FFFFFF;
                        padding: 16px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        max-width: 1200px;
                        margin: 0 auto;
                    }

                    .header span.logo {
                        font-size: 24px;
                        font-weight: 800;
                    }
                `}
            </style>
        </>
    )
}

export default Header