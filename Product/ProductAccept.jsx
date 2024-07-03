import styleProduct from "./styleProduct.css";
function ProductAccept(props) {
    
    const {names,prices,imageUrls,descriptions} = props;
    return (
        <>
        <div className="productCss">
            <h1 className="proHead">Product Details !</h1>
            <h2 className="SecHead">Name :{names}</h2>
            <p>Price : {prices}</p>
            <p>Image url : {imageUrls}</p>
            <p>Product Description : {descriptions}</p>
        </div>
        </>
    );
}
export default ProductAccept;