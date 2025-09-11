 const romanMap = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" }
    ];

    function convertToRoman() {
      const num = parseInt(document.getElementById("numberInput").value.trim(), 10);
      const output = document.getElementById("output");

      if (isNaN(num) || num < 1 || num > 3999) {
        output.textContent = "⚠️ Please enter a valid number between 1 and 3999.";
        output.className = "mt-5 text-center text-red-500 font-medium";
        return;
      }

      let result = "", n = num;
      for (const { value, symbol } of romanMap) {
        while (n >= value) {
          result += symbol;
          n -= value;
        }
      }

      output.textContent = `${num} → ${result}`;
      output.className = "mt-5 text-center text-gray-800 font-medium";
    }

    function convertToNumber() {
      const roman = document.getElementById("romanInput").value.trim().toUpperCase();
      const output = document.getElementById("output");

      if (!/^[MDCLXVI]+$/.test(roman)) {
        output.textContent = "⚠️ Invalid Roman numeral.";
        output.className = "mt-5 text-center text-red-500 font-medium";
        return;
      }

      let i = 0, num = 0;
      while (i < roman.length) {
        let two = romanMap.find(r => r.symbol === roman.substring(i, i + 2));
        let one = romanMap.find(r => r.symbol === roman.substring(i, i + 1));
        if (two) { num += two.value; i += 2; }
        else if (one) { num += one.value; i++; }
        else { 
          output.textContent = "⚠️ Invalid Roman numeral.";
          output.className = "mt-5 text-center text-red-500 font-medium";
          return;
        }
      }

      // Validate strict format
      let reconvert = "", temp = num;
      for (const { value, symbol } of romanMap) {
        while (temp >= value) {
          reconvert += symbol;
          temp -= value;
        }
      }

      if (roman !== reconvert) {
        output.textContent = "Invalid Roman numeral format.";
        output.className = "mt-5 text-center text-red-500 font-medium";
        return;
      }

      output.textContent = `${roman} → ${num}`;
      output.className = "mt-5 text-center text-gray-800 font-medium";
    }