


        function updateDisplay(val) {
            document.getElementById('display').value += val;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function calculate() {
            let result = document.getElementById('display').value;
            try {
                result = eval(result);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }