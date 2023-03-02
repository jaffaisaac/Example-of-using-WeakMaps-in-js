const WeakMapsUser = new WeakMap(); //here am just create a weakMap to be used later in my code 

function todo(obj){
    const work ={
         data : new Date(),
         message:`List do to for the work`
    }
    WeakMapsUser.set(obj,work);

}

const myobj ={}; //this the object u are refer to 
todo(myobj)
console.log(WeakMapsUser.get(myobj))


