/** 
*My Roman numeral CONVERTER FILE 
*@author Boye Osuntogun  <boyeosuntogun@gmail.com>
*/

    /*Object to hold the value of roman numerals in both
    the roman form and the expanded form
    */
    var enumer = {
    four: {regular: "IV", expanded: "IIII"},
    five: {regular: "V", expanded: "IIIII"},
    nine: {regular: "IX", expanded: "IIIIIIIII"},
    ten: {regular: "X", expanded: "IIIIIIIIII"},
    fourty: {regular: "XL", expanded: "XXXX"},
    fifty: {regular: "L", expanded: "XXXXX"},
    ninety: {regular: "XC", expanded: "XXXXXXXXX"},
    onehundred: {regular: "C", expanded: "XXXXXXXXXX"},
    fourhundred: {regular: "CD", expanded: "CCCC"},
    fivehundred: {regular: "D", expanded: "CCCCC"},
    ninehundred: {regular: "CM", expanded: "CCCCCCCCC"},
    onethousand: {regular:"M", expanded: "CCCCCCCCCC"}
    };

    var expanded_to_roman = [enumer.ten, enumer.nine, enumer.five, enumer.four,
                    enumer.onehundred, enumer.ninety, enumer.fifty, enumer.fourty,
                    enumer.onethousand, enumer.ninehundred, enumer.fivehundred, enumer.fourhundred];
                   

    var roman_to_expanded = [enumer.four, enumer.five, enumer.nine,
                    enumer.fourty, enumer.fifty, enumer.ninety,
                    enumer.fourhundred, enumer.fivehundred, enumer.ninehundred];          

    //regular expression testing the user input for validity
    var patternvalid = /^(?:M?M?M?)?((?:CM)|(?:DC?C?C?)|(?:CD)|(?:C?C?C?))?((?:XC)|(?:LX?X?X?)|(?:XL)|(?:X?X?X?))?((?:IX)|(?:VI?I?I?)|(?:IV)|(?:I?I?I?))?$/;
    

//function to rearrange string of romannumerals in an ascending order
function rearrange_ascending(t)
{
    var text = t;
    var newstring = "";   
    var order = ["I","V", "X", "L", "C", "D", "M"];
   for(var i = 0; i <order.length; i += 1 )
    {
        while(text.indexOf(order[i]) != -1)
        {
          var pos = text.indexOf(order[i]); 
          newstring += text.slice(pos, pos+1);
          text = text.slice(0,pos) + text.slice(pos+1);
        }
    }
    var check = newstring;
    return newstring;
}

//function to rearrange string in descending order
function rearrange_descending(t)
{
    var text = t;
    var newstring = "";  
    var order = ["M", "D", "C", "L", "X", "V", "I"];
   for(var i = 0; i <order.length; i += 1 )
    {
        while(text.indexOf(order[i]) != -1)
        {
          var pos = text.indexOf(order[i]); 
          newstring += text.slice(pos, pos+1);
          text = text.slice(0,pos) + text.slice(pos+1);
        }
    }
    return newstring;
}


//Converts the romannumeral entered to the expanded form
function romantoexpanded (a)
{
    var tmp = a;
    var newtxt ='';
    var text = tmp;
    var check3 = roman_to_expanded.length;
    for(var i = 0; i < roman_to_expanded.length; i += 1)
    {
        var regx = roman_to_expanded[i].regular;
        var filter = new RegExp(regx);
        while(filter.test(text))
        {
            newtxt = text.replace(roman_to_expanded[i].regular, roman_to_expanded[i].expanded);
            text = newtxt;
        }
    }
    
    //Condition to format the roman string if there was no converstion from roman to expanded
    if(newtxt === '')  
    {
        newtxt = tmp;
    }
    var check2 = newtxt;
    return newtxt;
}

//converts the romannumeral from expanded to roman form
function expandedtoroman (b)
{
	var tmp = b;
	var newtxt = '';
	var txt = rearrange_descending(tmp);
	for(var i = 0; i < expanded_to_roman.length; i +=1)
	{
		var regx = expanded_to_roman[i].expanded;
		var filter = new RegExp(regx);
		while(filter.test(txt))
		{
			newtxt = txt.replace(expanded_to_roman[i].expanded, expanded_to_roman[i].regular);
            txt = newtxt;
		}
	}
    
    ////Condition to format the roman string if there was no converstion from roman to expanded
    if(newtxt === '')
    {
     tmp = rearrange_descending(tmp);   
     newtxt = tmp;
    }
    var check4 = newtxt;
	return newtxt;
}



//function to check if user input is valid return error if incorrect
function validity (a,b)
{
    var first = a.toUpperCase();
    var second = b.toUpperCase();
    var patternvalid = /^(?:M?M?M?)?((?:CM)|(?:DC?C?C?)|(?:CD)|(?:C?C?C?))?((?:XC)|(?:LX?X?X?)|(?:XL)|(?:X?X?X?))?((?:IX)|(?:VI?I?I?)|(?:IV)|(?:I?I?I?))?$/;
    if((patternvalid.test('a')) &&  (patternvalid.test('b')))
    {
        return true;
    }
    else
    {
    	return false;
    }
}

function initializer ()
{
    //user input from form 1
    var userinput_a  = $('#form2').val().toUpperCase();
    console.debug(userinput_a);
    //user input from form 2 
    var userinput_b  = $('#form4').val().toUpperCase();
    console.debug(userinput_b);
    
    var stg = romantoexpanded(userinput_a);
    var stg2 = romantoexpanded(userinput_b);
    var combinedtext = stg + stg2;
    
    //covert the combined text to expanded form to return back to console
    var stage2 = expandedtoroman(combinedtext);      

    return stage2;
}