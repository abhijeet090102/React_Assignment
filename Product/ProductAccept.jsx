import styleProduct from "./styleProduct.css";
function ProductAccept(props) {
    
    const {names,prices,imageUrls,descriptions} = props;
    return (
        <>
        <div className="productCss">
            <h1 class="proHead">Product Details !</h1>
            <h2 class="SecHead">Name :{names}</h2>
            <p>Price : {prices}</p>
            <p>Image url : {imageUrls}</p>
            <p>Product Description : {descriptions}</p>
        </div>
        </>
    );
}
export default ProductAccept;