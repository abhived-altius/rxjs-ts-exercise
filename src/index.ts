import { SrvRecord } from "dns";
import { interval,map,filter } from "rxjs";

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


const Observable1 = interval(1500).pipe(
    map(()=>getRandomCar())
);

const Observable2 = Observable1.pipe(
    filter(car => car.color === 'black' && car.yearOfRelease<2000)
);

const sub = Observable2.subscribe(car =>
{
    console.log("New car has been created:",car);
}
);

// setTimeout(()=>
// {
//     sub.unsubscribe();
//     console.log('Stopped generating cars.');
// },7500);