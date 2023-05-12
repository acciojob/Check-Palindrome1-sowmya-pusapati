// complete the given function

function palindrome(str){
	let n=str.length;
	let i=0;
	let j=n-1;
	while(i<=j)
		{
			if(str.charAt(i)!=str.charAt(j))
			{
				return false;
			}
			i++;j--;
		}
	return true;

}
module.exports = palindrome
