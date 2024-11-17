import React from "react";
import ReactDOM from 'react-dom/client'


const heading = (
    <div>
        <h1>
            This is signle heading element in React.
        </h1>
    </div>
)

const Header = () => {
    return <h1>Hello! from Header.</h1>
}

const Layout  = () => {

    const price1 = 2000;
    const price2 = 2000;

    const calculatePrice = () => {
        return price1 + price2;
    }

    return (
        <div>
            <Header />
            {heading}
            <h1>This is my product price : {calculatePrice()}</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
