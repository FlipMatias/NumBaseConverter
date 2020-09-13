class Converter
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