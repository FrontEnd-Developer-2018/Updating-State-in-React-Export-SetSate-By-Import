#https://daveceddia.com/react-redux-immutability-guide/#redux-update-an-object



#https://stackoverflow.com/questions/53597482/setstate-outside-component


Short answer: No, you cannot setState outside a component.

Long answer: You cannot directly modify the component's state outside it, but you can always create a method that changes the state, then pass it down as props to <Code /> component. Example code (<Link /> component has been removed for simplicity)




        ---------------------------------------
        
        In this section you will implement your plain React component architecture that only receives all necessary props from their parent components. These props can include callback functions that will enable interactions later on. The point is that the props don't reveal where they are coming from. They could be props themselves that are located in the parent component, state from the local state in the parent component, or even Redux state. The callback functions are just functions too. Thus the components receiving them are not aware of using class methods operating on the local state of a parent component or Redux actions to alter the global state.
        
        
        --------------------
