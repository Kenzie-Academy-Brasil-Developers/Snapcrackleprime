function snapCracklePrime(maxValue) {

    let key = []

    for (let num = 1; num <= maxValue; num++) {

      if (num % 5 == 0 && num % 2 != 0) {
         if (isPrime(num)) {
          key.push('SnapCracklePrime')

        } else {
          key.push('SnapCrackle')
        }

      } else if (num % 5 == 0) {
        key.push('Crackle')

      } else if (num % 2 != 0) {

        if (isPrime(num)) {
          key.push('SnapPrime')

        } else {
          key.push('Snap')
        }
      } else {

        if (isPrime(num)) {

          key.push('Prime')
        } else {
          key.push(num)
        }
      }
    }
    return key.join(`,`)
  }
  snapCracklePrime(15)

  function isPrime(number) {

    let div = 0

    for (let i = 1; i <= number; i++) {

      if (number % i == 0) {

        div++
      }
    }

    if (div == 2) {
      
      return true

    } else {
      return false
    }
  }
  snapCracklePrime()