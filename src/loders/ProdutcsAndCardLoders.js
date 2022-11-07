import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCardLoders = async () => {
    // get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart
    const saveCart = getStoredCart();
    const priviousdCart = [];
    // console.log('saveCart', saveCart);

    for (const id in saveCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = saveCart[id];
            addedProduct.quantity = quantity;
            priviousdCart.push(addedProduct);
        }
    }

    return { products, priviousdCart };
}