import{ createContext, useReducer} from "react";

/*
CartContext manages:
    -a list of cart items
    -function to addItems()-> get a meal item to be added to cart
    -fucntion to removeItem()-> get the id of a meal and remove it from cart (items [])


*/
//Spreads data to components
const CartContext = createContext({
    items: [],
    addItem: (item)=>{},
    removeItem: (id)=>{},
});

//React will manage these params for us
//Returns updated state. Action tells how to update the state
function cartReducer(state, action){
    if(action.type === 'ADD_ITEM'){

        //Check if the item is already in our cart
        //returns true (! -1) if the action.item.id matches an id in our list of items
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
            );

        const updatedItems = [...state.items]; //copy of old items[]

        if(existingCartItemIndex > -1){ //item already exist
            //get the existing item
            const existingItem = state.items[existingCartItemIndex];
            //update quantity of item
            const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1,
             };
            //override the existing item in updatedItems with its new updatedItem
            updatedItems[existingCartItemIndex] = updatedItem;
        }else{ //item does not exist

            //When a new item is added, create a new item object that spreads all meal item data
            // into this object and quantity is set to 1 init
            updatedItems.push({ ...action.item, quantity: 1 });
        }
        //return a new object (bc we don't want to edit the existing state)
        // new object spreads existing state data into this object, and then override the
        // items [] with the updatedItems []
        return {...state, items: updatedItems};
    }

    if(action.type === 'REMOVE_ITEM'){
        //find the item to remove in items[]
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        )
        const updatedItems = [...state.items]; //copy of old items[]

        const existingItem = state.items[existingCartItemIndex];

        //Check the quantity of item to remove.
        // If quantity > 1 -> reduce quantity
        // If quantity = 1 -> remove item from items []
        if(existingItem.quantity === 1){
            updatedItems.splice(existingCartItemIndex, 1);
        } else{
            const updatedItem ={
                ...existingItem,
                quantity: existingItem.quantity -1,
            };
            //override the existing item in updatedItems with its new updatedItem
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {...state, items: updatedItems};
    }
    if (action.type === 'CLEAR_CART') {
        return { ...state, items: [] };
    }

    return state;
}

//Spread data is stateful, and so changing data is managed in CartContextProvider
//This is then wrapped around any Component that needs access to this context (children)
export function CartContextProvider({children}){
    //cart = state
    //dispatchCartAction = actions in reducer fn
    //cartReducer = reducer fn that enacts all the state updating functions
    // { items: [] } = init state
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    //functions to share amoung components
    function addItem(item){
        dispatchCartAction( {type:'ADD_ITEM', item:item} );
    }

    function removeItem(id){
        dispatchCartAction( {type:'REMOVE_ITEM', id:id} );
    }

    function clearCart() {
        dispatchCartAction({ type: 'CLEAR_CART' });
    }

    //sets cart-context to state and values being passed in
     const cartContext = {
        items: cart.items,
        addItem: addItem,
        removeItem: removeItem,
        clearCart: clearCart,
    };

    return(
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>);
}

export default CartContext;