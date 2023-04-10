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
    ON_SUCCESS_BUY_USER
} from '../_actions/types';


export default function (state = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, register: action.payload }
            case LOGIN_USER:
                return { ...state, loginSucces: action.payload }
            case AUTH_USER:
                return {...state, userData: action.payload }
            case LOGOUT_USER:
                return {...state }

        case ADD_TO_CART_USER:
            return {
                ...state, userData: {
                    ...state.userData,
                    cart: action.payload
                }
            }

            case ADD_TO_CART_ONCE_USER:
                return {
                    ...state, userData: {
                        ...state.userData,
                        cart: action.payload
                    }
                }

        case GET_CART_ITEMS_USER:
            return {
                ...state, cartDetail: action.payload
            }
        case REMOVE_CART_ITEM_USER:
            return {
                ...state,
                cartDetail: action.payload.cartDetail,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                }

            }
            case ADD_TO_PCBUILD_USER:
                return {
                    ...state, userData: {
                        ...state.userData,
                        pcBuild: action.payload
                    }
                }
            case GET_PCBUILD_ITEMS_USER:
                return {
                    ...state, pcBuildDetail: action.payload
                }
            case REMOVE_PCBUILD_ITEM_USER:
                return {
                    ...state,
                    pcBuildDetail: action.payload.pcBuildDetail,
                    userData: {
                        ...state.userData,
                        pcBuild: action.payload.pcBuild
                    }
    
                }
        case ON_SUCCESS_BUY_USER:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                },
                cartDetail: action.payload.cartDetail
            }
            case ADD_TO_WISHLIST_USER:
                return {
                    ...state, userData: {
                        ...state.userData,
                        wishlist: action.payload
                    }
                }
                case REMOVE_ORDER_ITEM_USER:
                    return {
                        ...state,
                        history: action.payload.history,
                    }
            case GET_WISHLIST_ITEMS_USER:
                return {
                    ...state, wishlistDetail: action.payload
                }
            case REMOVE_WISHLIST_ITEM_USER:
                return {
                    ...state,
                    wishlistDetail: action.payload.wishlistDetail,
                    userData: {
                        ...state.userData,
                        wishlist: action.payload.wishlist
                    }
    
                }

        default:
            return state;
    }
}