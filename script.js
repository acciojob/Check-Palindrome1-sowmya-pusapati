// complete the given function

function palindrome(str){
	let n=str.length;
	let i=0;
	let j=n-1;
	while(i<=j)
		{
			if(str.charAt(i).toLowerCase()!==str.charAt(j).toLowerCase())
			{
				return false;
			}
			i++;j--;
		}
	return true;

}
module.exports = palindrome
