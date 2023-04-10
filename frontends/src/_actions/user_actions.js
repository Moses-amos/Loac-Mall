import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART_USER,
    ADD_TO_CART_ONCE_USER,
    GET_CART_ITEMS_USER,
    REMOVE_CART_ITEM_USER,
    ADD_TO_WISHLIST_USER,
    GET_WISHLIST_ITEMS_USER,
    REMOVE_WISHLIST_ITEM_USER,
    ADD_TO_PCBUILD_USER,
    GET_PCBUILD_ITEMS_USER,
    REMOVE_PCBUILD_ITEM_USER,
    REMOVE_ORDER_ITEM_USER,
    ON_SUCCESS_BUY_USER,
} from './types';
import { USER_SERVER } from '../components/Config.js';

export function registerUser(dataToSubmit) {
    const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
        .then(response => response.data);

    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
                .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth(){
    const request = axios.get(`${USER_SERVER}/auth`)
    .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser() {
    const request = axios.get(`${USER_SERVER}/logout`)
        .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export function addToCart(_id) {
    const request = axios.get(`${USER_SERVER}/addToCart?productId=${_id}`)
        .then(response => response.data);

    return {
        type: ADD_TO_CART_USER,
        payload: request
    }
}

export function addToCartOnce(_id) {
    const request = axios.get(`${USER_SERVER}/addToCartOnce?productId=${_id}`)
        .then(response => response.data);

    return {
        type: ADD_TO_CART_ONCE_USER,
        payload: request
    }
}

export function addPcBuild(_id) {
    const request = axios.get(`${USER_SERVER}/addPcBuild?productId=${_id}`)
        .then(response => response.data);

    return {
        type: ADD_TO_PCBUILD_USER,
        payload: request
    }
}

export function addToWishlist(_id) {
    const request = axios.get(`${USER_SERVER}/addToWishlist?productId=${_id}`)
        .then(response => response.data);

    return {
        type: ADD_TO_WISHLIST_USER,
        payload: request
    }
}

export function getCartItems(cartItems, userCart) {
    const request = axios.get(`/api/product/products_by_id?id=${cartItems}&type=array`)
        .then(response => {


            //Make CartDetail inside Redux Store 
            // We need to add quantity data to Product Information that come from Product Collection. 

            userCart.forEach(cartItem => {
                response.data.forEach((productDetail, i) => {
                    if (cartItem.id === productDetail._id) {
                        response.data[i].quantity = cartItem.quantity;
                    }
                })
            })

            return response.data;
        });

    return {
        type: GET_CART_ITEMS_USER,
        payload: request
    }
}

export function getPcBuildItems(pcBuildItems, userPcBuild) {
    const request = axios.get(`/api/product/products_by_id?id=${pcBuildItems}&type=array`)
        .then(response => {


            //Make PcBuildDetail inside Redux Store 
            // We need to add quantity data to Product Information that come from Product Collection. 

            userPcBuild.forEach(pcBuildItems => {
                response.data.forEach((productDetail, i) => {
                    if (pcBuildItems.id === productDetail._id) {
                        response.data[i].quantity = pcBuildItems.quantity;
                    }
                })
            })

            return response.data;
        });

    return {
        type: GET_PCBUILD_ITEMS_USER,
        payload: request
    }
}

export function getWishlistItems(wishlistItems, userWishlist) {
    const request = axios.get(`/api/product/products_by_id?id=${wishlistItems}&type=array`)
        .then(response => {


            //Make wishlistDetail inside Redux Store 
            // We need to add quantity data to Product Information that come from Product Collection. 

            userWishlist.forEach(wishlistItems => {
                response.data.forEach((productDetail, i) => {
                    if (wishlistItems.id === productDetail._id) {
                        response.data[i].quantity = wishlistItems.quantity;
                    }
                })
            })

            return response.data;
        });

    return {
        type: GET_WISHLIST_ITEMS_USER,
        payload: request
    }
}

export function removeCartItem(id) {
    const request = axios.get(`/api/users/removeFromCart?_id=${id}`)
        .then(response => {

            response.data.cart.forEach(item => {
                response.data.cartDetail.forEach((k, i) => {
                    if (item.id === k._id) {
                        response.data.cartDetail[i].quantity = item.quantity
                    }
                })
            })
            return response.data;
        });

    return {
        type: REMOVE_CART_ITEM_USER,
        payload: request
    }
}

export function removePcBuildItem(id) {
    const request = axios.get(`/api/users/removeFromPcBuild?_id=${id}`)
        .then(response => {

            response.data.pcBuild.forEach(item => {
                response.data.pcBuildDetail.forEach((k, i) => {
                    if (item.id === k._id) {
                        response.data.pcBuildDetail[i].quantity = item.quantity
                    }
                })
            })
            return response.data;
        });

    return {
        type: REMOVE_PCBUILD_ITEM_USER,
        payload: request
    }
}


export function removeWishlistItem(id) {
    const request = axios.get(`/api/users/removeFromWishlist?_id=${id}`)
        .then(response => {

            response.data.wishlist.forEach(item => {
                response.data.wishlistDetail.forEach((k, i) => {
                    if (item.id === k._id) {
                        response.data.wishlistDetail[i].quantity = item.quantity
                    }
                })
            })
            return response.data;
        });

    return {
        type: REMOVE_WISHLIST_ITEM_USER,
        payload: request
    }
}

export function removeOrderItem(id) {
    const request = axios.get(`/api/users/removeOrder?_id=${id}`)
        .then(response => {

            response.data.history.forEach(item => {
                response.data.history.forEach((k, i) => {
                    if (item.id === k._id) {
                        response.data.history[i].quantity = item.quantity
                    }
                })
            })
            return response.data;
        });

    return {
        type: REMOVE_ORDER_ITEM_USER,
        payload: request
    }
}

export function onSuccessBuy(data) {

    const request = axios.post(`${USER_SERVER}/successBuy`, data)
        .then(response => response.data);

    return {
        type: ON_SUCCESS_BUY_USER,
        payload: request
    }
}
