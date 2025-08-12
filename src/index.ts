import { SrvRecord } from "dns";

interface Car
{
    name: String;
    model: String;
    yearOfRelease:  number;
    brand:String;
    color:String;
}

function getRandomCar(): Car
{
    const names = ["Swift", "Civic", "Mustang", "Corolla", "Model S"];
    const models = ["LX", "Sport", "Deluxe", "Pro", "GT"];
    const brands = ["Suzuki", "Honda", "Ford", "Toyota", "Tesla"];
    const colors = ["red", "blue", "black", "white", "green"];

    return {
        name : names[Math.floor(Math.random() * names.length)],
        model : models[Math.floor(Math.random() * models.length)],
        yearOfRelease : Math.floor(Math.random() * (1980-2025+1))+1980,
        brand: brands[Math.floor(Math.random() * brands.length)],
        color: colors[Math.floor(Math.random() * colors.length)]
    };
}

console.log(getRandomCar());