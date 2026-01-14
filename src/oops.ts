class chai {
    flavor: string; 
    price: number;

    constructor(flavour: string, price: number) {
        this.flavor = flavour
        this.price = price
    }
    
}


const masalaChai = new chai("Ginger", 20)
masalaChai.flavor = "masala"

//access modifier 

class Chai {
    public flavour: string = "Masala"

    private secretIngredients = "Cardamom"
}