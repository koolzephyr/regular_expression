function evaluateCellNo(str){
    var pat= /^98[546]\d{7}$/;    /*Regex for cell no starting from 98 followed by either 5,4,0 or 1 and other numbers
                                    and total length of 10*/
    if(pat.test(str)){
        alert(str+" is valid Cell No.");
    }
    else{
        alert(str+" is invalid Cell No.");
    }
}

function checkDomain(str)
{
    var domain = /^(w{3}[\.])([a-z0-9\-])+\.((com)|(org)|(net))$/i; /*Regex for Domain name starting with www. and ending with
                                                                      either .com,.org or .net*/

    if (domain.test(str))
    {
        alert(str+" is a domain.")
    }
    else
    {
        alert(str+" is not a domain.")
    }
}

function evaluateADU(str){
    var alpha=/[a-zA-Z_\-]/;    /*Regex for value containing alpha,dash and underscore*/
    if(alpha.test(str)){
        alert("Value contains at least one of Alpha,Dash and Underscore.");
    }
    else{
        alert("Value does not contain Alpha,Dash and Underscore.");
    }
}

function checkDate(str){
    var date = /^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/; /*Regex for date of format (mm/dd/yyyy) where
                                                                        mm<=12 and dd<=31*/
    if(date.test(str)){
        alert(str+" is valid Date.");
    }
    else{
        alert(str+" is invalid Date.");
    }
}

function checkTime(str){
    var time = /^(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])$/; /*Regex for time of format (hh:mm:ss) where
                                                                   hh<=23, mm<=59 and ss<=59*/
    if(time.test(str)){
        alert(str + " is valid Time.");
    }
    else{
        alert(str+ " is invalid Time.");
    }
}

function checkHex(str){
    var hex = /^#[0-9a-f]{6}$/i;    /*Regex for hexcode starting from # and consists of alphabet a-f or digits 0-9*/
    if(hex.test(str)){
        alert(str+" is valid Hexcode.");
    }
    else{
        alert(str+" is invalid Hexcode.");
    }
}
