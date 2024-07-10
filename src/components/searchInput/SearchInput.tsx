import { useLogInput } from "../../hooks/useLogInput";

export const SearchInput: React.FC = () => {
   
   const { value, handleChange } = useLogInput();

   return(
      <>
         <form action="">
            <input value={value} onChange={handleChange} />
         </form>
      </>
   );
}