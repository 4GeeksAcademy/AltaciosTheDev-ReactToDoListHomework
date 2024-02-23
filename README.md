# Important information 

1.) when changing the previous value of state, only the callback function allows for truly changing the previous value, if not used it will not allow more than 1 change per render.

2.) key prop is because react NEEDS to know which of the mapped items changed. 
        a)Key must be given AT THE TOP LEVEL of what will be rendered. 
        b)index of arrays not a good idea, better to generate a unique id. 