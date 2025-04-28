import {create} from "zustand"; 
import {persist} from "zustand/middleware";

export const useCartStore = create(persist((set) => ({
    cart : [], // 상태 
    setCart : (newCart) => set({ cart : newCart})
    // 새로운 카를 호출 + 렌더링 
}),
{
    name : "cart-storage",
}
)); 
