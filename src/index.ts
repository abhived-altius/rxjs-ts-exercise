import {interval} from "rxjs";

console.log('Hello RxJS + TypeScript');

const sub = interval(1000).subscribe((n) => 
{
    console.log("tick",n);
});

setTimeout(() => 
{
    sub.unsubscribe();
    console.log('Done');

}, 3500);
