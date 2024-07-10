import { ChangeEvent, useEffect, useState } from "react"

export const useLogInput = () => {

   // using useState hook for change the 'value' state (input of the search field)
   const [value, setValue] = useState<string>('');

   // reflect the changes we do in the search input 
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
   }

   // useEffect to run the console.log
   useEffect(() => {
      console.log(value)
   }, [value]);

   // returning the value and handleChange function
   return {
      value,
      handleChange
   }
}