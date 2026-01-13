function getchain(kind: string | number) {
    if(typeof kind === 'string'){
        return `Making ${kind} chai....`
    }

    return `Chain order: ${kind}`
}


// the above example is of typeNarrowing


function serveChain(msg?: string) {
    if(msg) {
        return `serving ${msg}`; 
    }

    return `Serving default masala chai`; 
}


//exhaustive checks 

function orderChain(size: "small" | "medium" | "large" | number) {
    if(size == "small") {
        return `small cutting chai`
    }

    if(size === "medium" || size == "large") {
        return `make extra chai`
    }

    return 'chai order #${size}'
}



class kulhadchai {
    serve() {
        return `serving Kulhad chai`
    }
}

class cuttingchai{
    serve() {
        return `serving cutting chai`
    }
}


function serve(chai: kulhadchai | cuttingchai) {
    if(chai instanceof kulhadchai) {
        return chai.serve(); 
    }
}


type ChaiOrder = {
    type: string
    sugar: number
}


function isChaiOrder(obj:any): obj is ChaiOrder {
    return (
        typeof obj === "object" && 
        obj !== null && 
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}



function serveorder(item:ChaiOrder | string) {
    if(isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }

    return 'Serving custom chai: ${item}'
}


type masalachai = {type: "masala", spicelevel: number}; 

type gingerchai = {type: "ginger", amount: number}; 

type elaichichai = {type: "elaichi", aroma: number}; 

type chai = masalachai | gingerchai | elaichichai; 


function Makechai(order: chai) {
    switch(order.type) {
        case "masala":
            return `masala chai`
        case "ginger":
            return `ginger chai`
        case "elaichi":
            return '`elaichi'
    }
}


function brew(order: masalachai | elaichichai ) {
    if("spicelevel" in order) {
        `return masala chai`
    }
}


// function isStringArray(arr: unknown): arr is string[] {

// }