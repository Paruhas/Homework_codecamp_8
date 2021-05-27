import { func } from "prop-types";

function Product(productList) {
    return (
    <div>
        <h4>title: {productList.title}</h4>
        <h4>description: {productList.description}</h4>
        <h4>price: {productList.price}</h4>
    </div>
    );
    
}

export default Product