
document.getElementById("checkPalindrome").addEventListener("click", function() {
    let str = document.getElementById("inputStr").value;
    document.getElementById("result").innerText = `Longest Sub-String of Palindrome is : ${findLongestPalindrome(str)}`  
});

function findLongestPalindrome(str) {
    let longest = "";
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const substr = str.slice(i, j);
        const reversed = substr.split('').reverse().join('');
        if (substr === reversed && substr.length > longest.length) {
          longest = substr;
        }
      }
    }
  
    return longest;
  }
  