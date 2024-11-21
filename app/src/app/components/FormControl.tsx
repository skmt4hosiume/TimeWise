// import { useState,useContext,useRef,useEffect } from "react";
// import { GlobalContex } from '@/app/providers/GlobalContex';
// import { initItem} from "@/app/components/Data";

// export const FormControl = function () {
//     const { dispatch } = useContext(GlobalContex);
//     const [ item,setItem ] = useState(initItem)
//     const inputRef = useRef<HTMLInputElement>(null);

//     const handleChange = function(e:React.ChangeEvent<HTMLInputElement>):
//     void{
//         setItem((i) => ({
//             ...i,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     const handleClick = function (e: React.MouseEvent<HTMLButtonElement>): void
//     {
//         dispatch({
//             type: 'add',
//             payload: {
//                 item,
//             },
//         });
//         setItem(initItem);

//         inputRef.current?.focus();
//     };

//     useEffect(()=>{
//         inputRef.current?.focus();
//     },[]);

//     return (
//         <>
//             <div>
//                 <input type="text" 
//                 name="name" 
//                 className="form-control" 
//                 value={item.name}
//                 onChange={handleChange}
//                 placeholder="商品"
//                 ref={inputRef}
//                 />
//                 <div>
//                     <input 
//                     type="number"
//                     name="price"
//                     className="form-control"
//                     value={item.price}
//                     onChange={handleChange}
//                     placeholder="金額"
//                     />
//                 </div>
//                 <div>
//                     <input
//                     type="number"
//                     name="amount"
//                     className="form-control"
//                     value={item.amount}
//                     onChange={handleChange}
//                     placeholder="個数"
//                     />
//                 </div>
//                 <div>
//                     <button className="btn btn-blue"></button>
//                 </div>
//             </div>
//         </>
//     )
// }