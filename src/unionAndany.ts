let subs: number | string = '1M' 


//use cases 

let apiReqStatus: 'pending' | 'success' | 'error' = 'pending'

apiReqStatus= "success"

let airlineSeat: 'aisle' | 'window' | 'window' = 'aisle'

airlineSeat = 'aisle'

const orders = ['12', '77', '42']; 

let currentorder: string | undefined; 

for(let order of orders) {
    if(order == '12') {
        currentorder = order
        break
    }

    currentorder = '11';
}


console.log(currentorder);