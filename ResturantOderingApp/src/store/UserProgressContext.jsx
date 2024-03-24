import{ createContext, useState} from "react";

/*
CartContext manages:
    -


*/
//Spread data to components
const UserProgressContext = createContext({
    progress: '', // 'cart' or 'checkout'
    showCart: ()=>{},
    hideCart: ()=>{},
    showCheckout: ()=>{},
    hideCheckout: ()=>{},
});

export function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress] = useState('');

    function showCart(){
        setUserProgress('cart');
    }
    function hideCart(){
        setUserProgress('');

    }
    function showCheckout(){
        setUserProgress('checkout');
    }
    function hideCheckout(){
        setUserProgress('')
    }

    const userProgressContext = {
        progress: userProgress, // 'cart' or 'checkout'
        showCart: showCart,
        hideCart: hideCart,
        showCheckout: showCheckout,
        hideCheckout: hideCheckout,
    }
    return(
        <UserProgressContext.Provider value={userProgressContext}>{children}</UserProgressContext.Provider>
    )
}

export default UserProgressContext;

