/* Objects in JS */

var Car = {
    car_brand : "Tesla",
    car_model : "Model 3",
    price : "$35000",
    autoPilot : function() {
        return "This car has auto pilot";
    }
}

document.write("<h2>"+Car.car_brand +"</h2>");
document.write("<h2>"+Car.autoPilot()+"</h2>");

document.write("___________________________________________________");

function Cars(car_brand, car_model, price) {
    this.car_brand = car_brand;
    this.car_model = car_model;
    this.price = price;
    this.autoPilot = function() {
        document.write("<h2>This car has auto pilot</h2>");
    }
}

var car1 = new Cars("Volvo", "Model 2", "$32000");
document.write("<h2>"+car1.car_brand+"</h2>");
document.write("<h2>"+car1.price+"</h2>");
car1.autoPilot();

document.write("___________________________________________________");

var str = new String();
document.write("<h2>"+typeof(str)+"</h2>");

var str1 = "String";
document.write("<h2>"+typeof(str1)+"</h2>");

document.write("___________________________________________________");

Car.fuelType = "Electric";
document.write("<h2>"+Car.fuelType+"</h2>");

delete Car.price;
document.write("<h2>"+Car.price+"</h2>");