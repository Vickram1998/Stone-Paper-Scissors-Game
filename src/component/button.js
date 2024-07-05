import './button.css'
function Button({ children, ...rest }) {
    return<h3>

     <button {...rest} style={{
         color:"blueviolet"
        }}> {children}</button>
        </h3>
  }
  function SecoundaryButton({children, ...rest}){
    return<Button{...rest}>
    {children}
    </Button>
  }














 export {
 SecoundaryButton,
 Button
    
 }
