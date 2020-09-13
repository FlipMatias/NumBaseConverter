/*class Converter
{
    constructor()
    {
        this._decimal = 0
    }
    
    
    setValue(strVal)
    {
        //if (strVal === '' || strVal === null || strVal === undefined) {
          //  return;
        //}
        
        
        if (strVal === '0x' || strVal === '0b') {
            return;
        }
        
        if (strVal.startsWith('0x')) {
            let str = strVal.substring(2, strVal.length)
            if (isHexa(str)) {
                this._decimal = parseInt(str, 16)
                return;
            }
        }
        
        if (strVal.startsWith('0b')) {
            let str = strVal.substring(2, strVal.length)
            if (isBinary(str)) {
                this._decimal = parseInt(str, 2)
                return;
            }
        }
        
        if (isDecimal(strVal)) {
            this._decimal = parseInt(strVal)
            return;
        }
    
        
        throw 'Invalid input!'
    }
    
    
    getDecimal()
    {
        return this._decimal.toString()
    }
    
    
    getHexa()
    {
        return this._decimal.toString(16)
    }
    
    
    getBinary()
    {
        return this._decimal.toString(2)
    }
}


function isDecimal(strNum)
{
    const re = /^[0-9]+$/
    return re.test(strNum)
}


function isHexa(strNum)
{
    const re = /[0-9a-fA-F]+/
    return re.test(strNum)
}


function isBinary(strNum)
{
    const re = /^-{0,1}\d+$/
    return re.test(strNum)
}
*/
const converter = new Converter()


//+----------------------+
//|reference to objects  | 
//+----------------------+

const inputValue = document.querySelector('[input-value]')
const inputDecimal = document.querySelector('[input-decimal]')
const inputHexa = document.querySelector('[input-hexa]')
const inputBinary = document.querySelector('[input-binary]')
const btnCopyDec = document.querySelector('[btn-copy-dec]')
const btnCopyHex = document.querySelector('[btn-copy-hex]')
const btnCopyBin = document.querySelector('[btn-copy-bin]')



//+----------------------+
//|setup events          | 
//+----------------------+

inputValue.addEventListener('input', () =>
{
    try 
    {
        inputValue.style.outlineColor = '#6c6ae6'
        
        if (inputValue.value === '' ||
            inputValue.value === undefined ||
            inputValue.value === null)
        {
            inputDecimal.value = ''
            inputHexa.value = ''
            inputBinary.value = ''
            inputValue.style.outlineColor = '#6c6ae6'
            return;
        }
        
        converter.setValue(inputValue.value)
        inputDecimal.value = converter.getDecimal()
        inputHexa.value = converter.getHexa()
        inputBinary.value = converter.getBinary()
    } 
    catch(ex) 
    {
        console.log(ex)
        inputValue.style.outlineColor = 'red'
    }
})


btnCopyDec.addEventListener('click', () =>
{
    inputDecimal.select()
    document.execCommand('copy')
})


btnCopyHex.addEventListener('click', () =>
{
    inputHexa.select()
    document.execCommand('copy')
})


btnCopyBin.addEventListener('click', () =>
{
    inputBinary.select()
    document.execCommand('copy')
})