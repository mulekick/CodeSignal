function buildPalindrome(st) {
        var ispalindrome = function(s) {
            var a = s.split("");
            var b = s.split("").reverse();
            return a.every((x,i) => (x == b[i]) ? true : false)
        }

        var pos = 0;
        var result = st;
        var arr = []
        
        while (ispalindrome(result) == false) {
            result = st.substr(pos);
            arr.push(st[pos++]);
        }
                
        arr.pop();      
                
        return (typeof arr[0] == "undefined") ? st : st + arr.reverse().join("");
}
