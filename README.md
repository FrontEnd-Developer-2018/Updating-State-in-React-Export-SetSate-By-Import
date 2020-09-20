#https://daveceddia.com/react-redux-immutability-guide/#redux-update-an-object



#https://stackoverflow.com/questions/53597482/setstate-outside-component


Short answer: No, you cannot setState outside a component.

Long answer: You cannot directly modify the component's state outside it, but you can always create a method that changes the state, then pass it down as props to <Code /> component. Example code (<Link /> component has been removed for simplicity)