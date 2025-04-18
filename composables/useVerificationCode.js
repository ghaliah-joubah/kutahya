
export const useVerificationCode = () => {
    const keysAllowed= ref(["0","1","2","3","4","5","6","7","8","9",])
    const dataFromPaste= ref([])
    const error= ref({
        verificationCode:[],
    },)
    const verificationCode=ref('')

    const handleDelete = (e) => {
        let value = (e.target ).value;
        let currentActiveElement = e.target ;
        if (!value)
        (   currentActiveElement.previousElementSibling)?.focus();
    };

    const isNumber=(e)=> {
        (e.currentTarget).value = "";
        const keyPressed = (e).key;
        if (!keysAllowed.value.includes(keyPressed)) {
            e.preventDefault();
        }
    }

    const handleInputCustom=(e,code) =>{
        error.value.verificationCode = [];
        const inputType = (e).inputType;
        let currentActiveElement = e.target;
    
        if (inputType === "insertText")
            (currentActiveElement.nextElementSibling)?.focus();

        if (inputType === "insertFromPaste" && dataFromPaste.value) {
            for (const num of dataFromPaste.value) {
                let id= parseInt(currentActiveElement.id.split("_")[1]);
                currentActiveElement.value = num;
        
                code[id] = num;
                if (currentActiveElement.nextElementSibling) {
                currentActiveElement =
                currentActiveElement.nextElementSibling ;
                (currentActiveElement.nextElementSibling)?.focus();
                }
            }
        }
        verificationCode.value = [code[0],code[1],code[2],code[3]].join('')
    }

    const onPaste=(e)=> {
        dataFromPaste.value = (e).clipboardData?.getData("text").trim().split("");
        if (dataFromPaste.value) {
        for (const num of dataFromPaste.value) {
            if (!keysAllowed.value.includes(num)) e.preventDefault();
        }
        }
    }
    return { isNumber,handleDelete,onPaste,handleInputCustom,verificationCode, error };
};