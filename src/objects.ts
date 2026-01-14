const chai = {
    name: "Masala Chai", 
    price: 20, 
    isHot: true
}


let tea : {
    name: string; 
    price: number; 
    isHot: boolean
}

tea = {
    name:   "ginger tea", 
    price: 25, 
    isHot: true
}


type Chai = {
    name: string; 
    price: number; 
    isHot: boolean;
}


const updateChai = (updates: Partial<Chai>) => {
    console.log("update chai with", updates);
}

updateChai({price: 25})